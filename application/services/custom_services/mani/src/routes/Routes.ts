import { Request, Response, NextFunction } from "express";
import { whoController } from '../controller/whoController';


export class Routes {
    private who: whoController = new whoController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/who').post(this.who.GpCreate);
app.route('/who').get(this.who.GpGetAllValues);
     }

}