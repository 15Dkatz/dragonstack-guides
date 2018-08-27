const { Router } = require('express');
const DragonTable = require('../dragon/table');
const AccountDragonTable = require('../accountDragon/table');
const { authenticatedAccount } = require('./helper');
const { getPublicDragons } = require('../dragon/helper');

const router = new Router();

router.get('/new', (req, res, next) => {
  let accountId, dragon;

  authenticatedAccount({ sessionString: req.cookies.sessionString })
    .then(({ account }) => {
      accountId = account.id;

      dragon = req.app.locals.engine.generation.newDragon();

      console.log('dragon to store', dragon);

      return DragonTable.storeDragon(dragon);
    })
    .then(({ dragonId }) => {
      dragon.dragonId = dragonId;

      console.log('resolved dragonId', dragonId);

      return AccountDragonTable.storeAccountDragon({ accountId, dragonId });
    })
    .then(() => res.json({ dragon }))
    .catch(error => next(error));
});

router.put('/update', (req, res, next) => {
  const { dragonId, nickname, isPublic, saleValue } = req.body;

  DragonTable.updateDragon({ dragonId, nickname, isPublic, saleValue })
    .then(() => res.json({ message: 'successfully updated dragon' }))
    .catch(error => next(error));
});

router.get('/public-dragons', (req, res, next) => {
  getPublicDragons()
    .then(({ dragons }) => res.json({ dragons }))
    .catch(error => next(error));
});

module.exports = router;
