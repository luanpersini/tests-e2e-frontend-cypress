import { LogErrorRepository } from './log-error-repository';


//TODO Clarify if we need this
export class LogMongoRepository implements LogErrorRepository {
  async logError(stack: any): Promise<void> {
    
  //   if (process.env.NODE_ENV !== 'production') {
  //     console.log(stack);
  //  }
  
    console.log(stack)
    // const errorCollection = await MongoHelper.getCollection('errors')
    // await errorCollection.insertOne({
    //   stack,
    //   date: new Date()
    // })
  }
}
