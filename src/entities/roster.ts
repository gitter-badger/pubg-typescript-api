import { IRoster } from '..';
import { Participant } from './participant';

export class Roster {
  private _id: string;
  private _hasWon: boolean;
  private _rank: number;
  private _teamId: number;

  private _participants: Participant[];

  constructor(roster: IRoster) {
    this._id = roster.id;
    this._hasWon = roster.attributes.won === 'true';
    this._rank = roster.attributes.stats.rank;
    this._teamId = roster.attributes.stats.teamId;
    this._participants = [];
  }
}
