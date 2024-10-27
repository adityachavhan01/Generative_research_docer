import express from 'express';
import open from 'open';
// import * as cheerio from 'cheerio';
// import axios from 'axios';
import cors from 'cors';  // Keep CORS for frontend-backend communication

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Updated endpoint to search for PDFs
app.post('/search', async (req, res) => {
    const { prompt } = req.body;

    // 1) construct for google api direact

    // Only encode the user's prompt, and append the filetype:pdf filter directly
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(prompt)} `;

    try {
        await open(searchUrl);
        res.json({ message: 'PDF search query opened in browser.' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to open browser', details: err });
    }

    // 2) construct for bing api direct
    // Your Bing API Key and Endpoint
    // const BING_API_KEY = 'YOUR_BING_API_KEY'; // Replace with your actual API key
    // const BING_ENDPOINT = 'https://api.bing.microsoft.com/v7.0/search';

    // app.post('/search', async (req, res) => {
    //     const { prompt } = req.body;

    //     // Construct the search query for PDFs
    //     const query = `${encodeURIComponent(prompt)} filetype:pdf`;

    //     try {
    //         const response = await axios.get(BING_ENDPOINT, {
    //             headers: {
    //                 'Ocp-Apim-Subscription-Key': BING_API_KEY,
    //             },
    //             params: {
    //                 q: query,
    //                 count: 10, // number of results to return
    //             },
    //         });

    //         // Send the PDF links back to the frontend
    //         const pdfLinks = response.data.webPages.value
    //             .filter(page => page.url.endsWith('.pdf')) // Filter only PDF links
    //             .map(page => page.url);

    //         res.json({ pdfLinks });
    //     } catch (err) {
    //         res.status(500).json({ error: 'Failed to fetch PDF results', details: err });
    //     }
    // });

    // Construct the search query for DuckDuckGo

    // const query = `${encodeURIComponent(prompt)}  filetype:pdf`;
    // const duckDuckGoUrl = `https://duckduckgo.com/?q=${query}`;

    // console.log(`Searching for: ${query}`); // Debug log

    // try {
    //     // Fetch the DuckDuckGo search results page
    //     const response = await axios.get(duckDuckGoUrl);
    //     const html = response.data;
    //     const $ = cheerio.load(html);

    //     // Collect PDF links from search results
    //     const pdfLinks = [];

    //     $('a').each((index, element) => {
    //         const link = $(element).attr('href');
    //         if (link && link.includes('.pdf')) {
    //             pdfLinks.push(link);
    //         }
    //     });

    //     // Check if any PDF links are found
    //     if (pdfLinks.length === 0) {
    //         console.log('No PDF links found.'); // Debug log
    //     } else {
    //         console.log(`Found PDF links: ${pdfLinks}`); // Debug log
    //     }

    //     // Send the PDF links back to the frontend
    //     res.json({ pdfLinks });
    // } catch (err) {
    //     console.error('Error fetching PDF results:', err); // Log the error
    //     res.status(500).json({ error: 'Failed to fetch PDF results', details: err.message });}
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
