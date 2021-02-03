import { Request, Response } from 'express';
import {whoDao} from '../dao/whoDao';
import { CustomLogger } from '../config/Logger'
let who = new whoDao();

export class whoService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into whoService.ts: GpCreate')
     const  whoData = req.body;
     who.GpCreate(whoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from whoService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into whoService.ts: GpGetAllValues')
     
     who.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from whoService.ts: GpGetAllValues')
         callback(response);
         });
    }


}