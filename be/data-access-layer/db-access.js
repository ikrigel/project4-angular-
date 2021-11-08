const mysql = require('mysql')
let con;
//'mysql://b957015d3dd7cd:b775fb62@us-cdbr-east-04.cleardb.com/heroku_98eed5a993c392d?reconnect=true'
//mysql --host=us-cdbr-east-04.cleardb.com --user=b957015d3dd7cd --password=b775fb62 --reconnect heroku_98eed5a993c392d
function Open(app) {
    return new Promise((resolve, reject) => {
        con = mysql.createConnection({
            host: 'us-cdbr-east-04.cleardb.com',
            user: 'b957015d3dd7cd',
            password: 'b775fb62',
            database: 'heroku_98eed5a993c392d',
            timezone: 'utc'
        });
        con.connect((err) => {
            if (err) {
                con.end()
                reject(err)
            } else {
                console.log('mySql is connected...')
                app.set('CONNECTION', con);
                resolve(true);
            }
        })
    });
}

function Close() {
    con.end();
}

module.exports = {Open,Close}