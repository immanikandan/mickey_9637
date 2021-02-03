import * as mongoose from 'mongoose';
import whoModel from '../models/who';
import { CustomLogger } from '../config/Logger'


export class whoDao {
    private who = whoModel;
    constructor() { }
public GpCreate(whoData, callback){
new CustomLogger().showLogger('info', 'Enter into whoDao.ts: GpCreate')
let temp = new whoModel(whoData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from whoDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into whoDao.ts: GpGetAllValues')

this.who.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from whoDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}


}