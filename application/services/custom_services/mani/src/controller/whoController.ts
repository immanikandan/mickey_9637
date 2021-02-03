import { Request, Response } from 'express';
import { whoService } from '../service/whoService';
import { CustomLogger } from '../config/Logger'
let who = new whoService();

export class whoController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
who.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into whoController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from whoController.ts: GpCreate');
    })}
public GpGetAllValues(req: Request, res: Response) {
who.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into whoController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from whoController.ts: GpGetAllValues');
    })}


}