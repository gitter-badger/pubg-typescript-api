import { IAsset } from '..';

export class Asset {
  private _id: string;
  private _url: string;
  private _dateCreated: Date;

  constructor(asset: IAsset) {
    this._id = asset.id;
    this._url = asset.attributes.URL;
    this._dateCreated = new Date(asset.attributes.createdAt);
  }
}
