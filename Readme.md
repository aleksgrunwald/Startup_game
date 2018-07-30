# Uruchomienie

1.  Zainstalować npm https://www.npmjs.com/get-npm
2.  Zainstalować gita
    > npm install -g ionic
    > Git clone https://github.com/aleksgrunwald/Startup_game.git
    > npm install
    > ionic serve

# Testowanie API

    (...)\Startup_game>node
    > const api = require('./api')
    undefined
    > api.startNewGame()
    { status: 'ok' }
