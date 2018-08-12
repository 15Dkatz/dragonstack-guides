const GenerationEngine = require('./engine');

const engine = new GenerationEngine();

engine.start();

setTimeout(() => {
  engine.stop();
}, 20000);