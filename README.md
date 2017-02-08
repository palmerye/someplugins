#init 

# install dependencies
npm install

# connect to leancloud
cd leancloud/
lean app add origin <leancloudAppid>

\\\\\\\\\\\\\\\\\\\\\\\\\\\\
#usage

#development
npm run dev

#deploy or publish
npm run build
cd leancloud/
lean deploy
lean publish