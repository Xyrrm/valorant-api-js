/**
 * valorant-api-js
 * Module to make API calls to valorant-api.com
 * API made by @Officer#9999
 *
 * @author Vanxh & Xyrrm
 */

// modules
const axios = require("axios");
const base_url = `https://valorant-api.com/v1/`;

// main class
class Client {
  /**
   * constructor()
   * @param {object} [config]
   * @param {string} [config.language]
   */
  constructor(config = {}) {
    this.language = config.language || "en-US";
  }

  /**
   * request(endpoint)
   * @param {string} [endpoint]
   * returns {Promise <object>}
   */
  async request(endpoint) {
    var config = {
      method: `get`,
      url: `${base_url}${endpoint}?language=${this.language}`,
    };
    try {
      return (await axios(config)).data;
    } catch (e) {
      return e;
    }
  }

  async getAgents(uuid) {
    return uuid ? await this.request(`agents/${uuid}`) : await this.request(`agents`);
  }

  async getPlayableAgents() {
    return await this.request(`agents?isPlayableChaaracter=true`);
  }

  async getBuddies(uuid) {
    return uuid ? await this.request(`buddies/${uuid}`) : await this.request(`buddies`);
  }

  async getBundles(uuid) {
    return uuid ? await this.request(`bundles/${uuid}`) : await this.request(`bundles`);
  }

  async getCompetitiveTiers(uuid) {
    return uuid ? await this.request(`competitivetiers/${uuid}`) : await this.request(`competitivetiers`);
  }

  async getContentTiers(uuid) {
    return uuid ? await this.request(`contenttiers/${uuid}`) : await this.request(`contenttiers`);
  }

  async getContracts(uuid) {
    return uuid ? await this.request(`contracts/${uuid}`) : await this.request(`contracts`);
  }

  async getCurrency(uuid) {
    return uuid ? await this.request(`currencies/${uuid}`) : await this.request(`currencies/`);
  }

  async getGamemodes(uuid) {
    return uuid ? await this.request(`gamemodes/${uuid}`) : await this.request(`gamemodes`);
  }

  async getGear(uuid) {
    return uuid ? await this.request(`gear/${uuid}`) : await this.request(`gear`);
  }

  async getEvents(uuid) {
    return uuid ? await this.request(`events/${uuid}`) : await this.request(`events`);
  }

  async getEquippables(uuid) {
    return uuid ? await this.request(`equippables/${uuid}`) : await this.request(`equippables`);
  }

  async getMaps(uuid) {
    return uuid ? await this.request(`maps/${uuid}`) : await this.request(`maps`);
  }

  async getMissions(uuid) {
    return uuid ? await this.request(`missions/${uuid}`) : await this.request(`missions`);
  }

  async getObjectives(uuid) {
    return uuid ? await this.request(`objectives/${uuid}`) : await this.request(`objectives`);
  }

  async getPlayerCards(uuid) {
    return uuid ? await this.request(`playercards/${uuid}`) : await this.request(`playercards`);
  }

  async getPlayerTitles(uuid) {
    return uuid ? await this.request(`playertitles/${uuid}`) : await this.request(`playertitles`);
  }

  async getSeasons(uuid) {
    return uuid ? await this.request(`seasons/${uuid}`) : await this.request(`seasons`);
  }

  async getSprays(uuid) {
    return uuid ? await this.request(`sprays/${uuid}`) : await this.request(`sprays`);
  }

  async getSkins(uuid) {
    return uuid ? await this.request(`weapons/skins/${uuid}`) : await this.request(`weapons/skins`);
  }

  async getSkinLevels(uuid) {
    return uuid ? await this.request(`weapons/skinlevels/${uuid}`) : await this.request(`weapons/skinlevels`);
  }

  async getSkinChromas(uuid) {
    return uuid ? await this.request(`weapons/skinchromas/${uuid}`) : await this.request(`weapons/skinchromas`);
  }

  async getThemes(uuid) {
    return uuid ? await this.request(`themes/${uuid}`) : await this.request(`themes`);
  }

  async getWeapons(uuid) {
    return uuid ? await this.request(`weapons/${uuid}`) : await this.request(`weapons`);
  }

  async getVersion() {
    return await this.request(`version`);
  }
}
module.exports = Client;
