import app from "./index";

/**
 * Set the port number that your server will listen on
 * @type {number}
 */
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

/**
 * Start the server and listen on the specified port.
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
