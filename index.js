const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const main = async() => {
    // const response = await openai.createCompletion({
    //     model: "text-davinci-002",
    //     prompt: "Say this is a test",
    //     temperature: 0,
    //     max_tokens: 6,
    //   });
    const response = await openai.createImage({
        prompt: "a white siamese cat",
        n: 1,
        size: "1024x1024",
    });
    image_url = response.data.data[0].url;
    console.log(image_url)
}

main()