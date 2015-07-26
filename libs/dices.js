"use strict";

/** Represents a set of game dices \
 * *new AnyBoard.Dices(eyes, numOfDice)*
 * @constructor
 * @property {number} eyes number of max eyes on a roll with this dice *(default 6)*\
 * @property {number} numOfDice number of dices *(default: 1)*
 *
 */
AnyBoard.Dices = function (eyes, numOfDice) {
    this.eyes = eyes || 6;
    this.numOfDice = numOfDice || 1;
};

/**
 * Roll the dices and returns a the sum
 * @returns {number} combined result of rolls for all dices
 */
AnyBoard.Dices.prototype.roll = function() {
    var res = 0;
    for (var i = 0; i < this.numOfDice; i++)
        res += Math.floor(Math.random()*this.eyes)+1;
    return res;
};

/**
 * Roll the dices and returns an array of results for each dice
 * @returns {Array} list of results for each dice
 */
AnyBoard.Dices.prototype.rollEach = function() {
    var res = [];
    for (var i = 0; i < this.numOfDice; i++)
        res.push(Math.floor(Math.random()*this.eyes)+1);
    return res;
};
