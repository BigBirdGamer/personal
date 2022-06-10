# Mongoose

Server ==(mongoose)=> Mongodb

## Database

CRUD - Create, Read, Update, Delete

```js
Create - insert( { ...data } )
Read - find ( { ... criteria}, { ... projection})
Update - update( {...criteria}, { ... operation})
Delete - deleteOne ({ ...criteria})
```

## Creating

```js
const myFirstTweet = {
  title: "Deep Thoughts",
  body: "Friends, I have been navel-gazing",
  author: "Karolin",
};


Tweet.create(myFirstTweet, (error, tweet) => {
  if (error) {
    console.log(error);
  } else {
    console.log(tweet);
  }
});
```

## Create Alt

```js
const tweet = new Tweet({ ... });
try {
    tweet.save().then(savedTweet => console.log(savedTweet._id));
} catch(error) {
    console.log(error);
}
```

## Find

const doFind = async () => {
    try {
      const tweets = await Tweet.find(
        { $or: [{ title: "Deep Thoughts" }, { title: "Water" }] },
        { title: true, body: true}
      );
      console.log(tweets);
    } catch (error) {
      console.log(error);
    }
  };
  doFind();
  
  ## update

  const doUpdate = async () => {
    try {
      //? findOneAndUpdate => 3 parameters
      const updatedTweet = await Tweet.findOneAndUpdate(
        { title: "Vespa" }, //? criteria
        { likes: 30 }, //? thing to change
      //   { new: true } //? option to see old or new
      );
      console.log(updatedTweet);
    } catch (error) {
      console.log(error);
    }
  };
  doUpdate()
  
  
  