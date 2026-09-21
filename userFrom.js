function userForm(req, resp) {
    resp.writeHead(200, { "content-type": "text/html" });
    resp.write(`
    <Form action="submit" method="post">
    <h1>This is from page</h1>
    <input type="text" name="n">
    <input type="text" name="n1">
    <button>Submit</button> 
    </Form>
    `);

};
module.exports = userForm;
