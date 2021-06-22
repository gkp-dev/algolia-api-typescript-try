import  {index} from './core/config/algolia'
import './core/config/env'
import {ObjectToCreate} from '../index'

//Search
const search = (query:string) => {
    index.search(query).then(res=>console.log(res)).catch(err=>console.error(err))
}


//Get settings
const getSettings = () => {
    index.getSettings().then(res=>console.log(res)).catch(err=>console.error(err))
}


//Set the searchable Attributes
const setSettings = (array:[]) => {
   index.setSettings({searchableAttributes:array}).catch(err=>console.error(err))
}

//Add objects
const createObject = (object:ObjectToCreate[]) => {
    index
  .saveObjects(object, { autoGenerateObjectIDIfNotExist: true })
  .then(({objectIDs}) => {
    console.log(objectIDs);
  })
    .catch(err => console.error(err));
}

//Get Objects
const getObject = (objectIDs:[]) => {
    index.getObjects(objectIDs, {
  attributesToRetrieve: ['name', 'price','imageUrl']
}).then(({ results }) => {
  console.log(results);
}).catch(err=>console.error(err))
    
}

//Delete
const deleteObjectsWithId = (objectId:[]) => {
    index.deleteObjects(objectId).then(res=>console.log(res)).catch(err=>console.error(err))
}


//Delete all the index
const deleteIndex = () => {
    index.clearObjects().then(res=>console.log(res)).catch(err=>console.error(err))
}


export {
  search,
  setSettings,
  getSettings,
  createObject,
  getObject,
  deleteObjectsWithId,
  deleteIndex
}




