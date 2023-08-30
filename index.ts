import express, { Express } from "express";
import { portNumber } from "./src/constant/constant";
import { userContext, swaggerContext, adminContext , productContext} from "./src/constant/constant";
import { userRouter } from "./src/routers/router";
import { adminRouterV1 } from "./src/routers/router";
import { mongo } from "./src/provider/mongo/mongo";
import { serve, setup } from "swagger-ui-express";
import swaggerDocument from "./swagger/parse-swagger.json";
import { utils } from "./src/utils/utils";
import { productRouterV1 } from "./src/routers/porduct.routes";
import { socketStart } from "./src/socketio/socket";
import cors from "cors";
// import { mqttController } from "./src/controller/mqtt.controller";
// TODO Add eslint to code , Add comments for function
class App {
  private app!: Express;
  private port!: number;
  private context!: string;
  private adminContext!: string;
  private productContext !: string
  private swaggerContext!: string;
  constructor() {
    this.startApp();
  }
  startApp() {
    this.app = express();
    this.loadGlobalMiddleWare();
    mongo.initiateMongoConnection;
    this.loadRouter()
    //  connectToBroker()
    // this.connectToBroker()
    // mqttController.subscribeToReviewerChatMessages();
    // mqttController.subscribeToUserChatMessages;
    socketStart();
    this.initServer();    // this.connectToRabbitMQ()

  }
loadGlobalMiddleWare() {
    this.swaggerContext=swaggerContext;
    this.adminContext=adminContext;
    this.context = userContext;
    this.productContext = productContext
    this.app.use(express.json());
    this.port = portNumber;
    const corsOptions = {
      origin: '*', // Allow requests from this origin
    };
    this.app.use(cors(corsOptions))

  }
  loadRouter() {
    this.app.use(this.swaggerContext, serve, setup(swaggerDocument));
    this.app.use(this.context, userRouter.userRouter());
    this.app.use(this.adminContext ,adminRouterV1.adminrouter());
    this.app.use(this.productContext,productRouterV1.productRouter())
  }
  initServer() {
    this.app.listen(this.port, this.callback);
  }
  //TODO Why we used callback 
  private callback = () => {
    console.log(`Server listing on port: ${this.port}`);
  };
  // private async connectToRabbitMQ() {
  //   try {
  //     rabbitConnection = await connect('amqp://localhost');
  //     startReviewListener()
  //     console.log('Connected to RabbitMQ');
  //   } catch (error) {
  //     console.error('Error connecting to RabbitMQ:', error);
  //   }
  // }
 
 
}
(async () => {
  await utils.constructSwaggerSchema();
  
  // startReviewListener();
  new App();
})();
