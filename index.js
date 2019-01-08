let express = require('express');
let app = express();
app.set('view engine', 'ejs');

let server = require('http').createServer(app);
let port = process.env.port || 9090;
let folderUrl = 'http://localhost:' + port + '/results/';
let newtUrl = 'http://localhost:9000';

let sections = [
  {
    title: 'Without feedback',
    results: [
      {
        description: 'FDR = 0.1, strict site macthing',
        file: 'without-feedback.nwt'
      },
      {
        description: 'FDR = 0.2, strict site matching',
        file: 'without-feedback-fdr0-2.nwt'
      },
      {
        description: 'FDR = 0.1, site match relaxed 1aa',
        file: 'without-feedback-relax1aa.nwt'
      },
      {
        description: 'FDR = 0.1, no site match',
        file: 'without-feedback-nositematch.nwt'
      }
    ]
  },
  {
    title: 'With feedback',
    results: [
      {
        description: 'FDR = 0.1, strict site macthing',
        file: 'with-feedback.nwt'
      },
      {
        description: 'FDR = 0.2, strict site matching',
        file: 'with-feedback-fdr0-2.nwt'
      },
      {
        description: 'FDR = 0.1, site match relaxed 1aa',
        file: 'with-feedback-relax1aa.nwt'
      },
      {
        description: 'FDR = 0.1, no site match',
        file: 'with-feedback-nositematch.nwt'
      }
    ]
  }
];

server.listen(port, function(){
  console.log('server listening on port: %d', port);
});

app.get('/', function(req, res){
  res.render('index', { folderUrl, sections, newtUrl });
});

app.use(express.static(__dirname));
