
cd /home/antfris/repos/live-spreadsheet
git pull
mongo wellspentapi --eval "db.brands.drop()"
node csv-import.js
