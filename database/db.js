
import mongoose from "mongoose"




const Connection = async (username, password) => {
     
    const URL = `mongodb+srv://${username}:${password}@cluster0.puplslt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

     try{
           await mongoose.connect(URL, { useNewUrlParser: true});
           console.log('Database connnected successfully');
     }
     catch(error){
          console.log('Error while connecting with database', error);
     }

}



export default Connection;