# new-item $PROFILE -Force -ItemType file
# oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json' | Invoke-Expression 
oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/huvix.omp.json' | Invoke-Expression
# aliase para crear un commit para agregar git add . y git commit -am "mensaje"
function gitc { git add .; git commit -am $args[0]; }
# aliase para crear un commit para agregar git add . y git commit -am "mensaje"
function gitp { git add .; git commit -am $args[0]; git push; }
