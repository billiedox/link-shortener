
import Url from '../model/url.js';
import axios from 'axios';

export const newUrl = async (request, response) => {
    //   Define the headers
      const headers = {
        "Content-Type": "text/plain",
        apikey: "AtJpfMCXaU61UYkNWnCYtZKCPvh3OQkV",
      };

      const shortenUrl = "https://api.apilayer.com/short_url/hash";
      const data = request.body.url;
      const res = await axios.post(shortenUrl, data, { headers });
      
      const {data : { short_url }} = res;
    
    try {
        const newUrlurl = await new Url({org : data, short:short_url});
        newUrlurl.save();

        response.status(200).json({
            message: 'Url saved successfully',
            short_url: short_url
        });
    } catch (error) {``
        response.status(500).json(error);
    }
}


export const getUrls = async (request, response) => {
    try {
        const urls = await Url.find();
        
        response.status(200).json(urls);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deleteUrl = async (request, response) => {
    try {        
        const url = await Url.findById(request.params._id);
        await url.delete()

        response.status(200).json('Url deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}