# dotfiles
My configuration files

## Install config 
Warning: This may override your own config files. If they are important to you back them up first!
Run the following commands in your users home directory:

```
git clone https://github.com/Jasperhino/PopOS-config.git
chmod +x init.sh  config.sh update.sh

./init.sh
./config.sh
```

## Add new file to dotfiles
```
dotfiles add .bashrc`
dotfiles commit -m "Add bashrc"
dotfiles push
```

## Update config files
```
./update.sh
```

## Reference
https://medium.com/toutsbrasil/how-to-manage-your-dotfiles-with-git-f7aeed8adf8b
