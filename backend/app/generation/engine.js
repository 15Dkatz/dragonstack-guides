const Generation = require('./index');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.timer);
  }

  buildNewGeneration() {
    this.generation = new Generation();

    console.log('new generation', this.generation);

    this.timer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;
