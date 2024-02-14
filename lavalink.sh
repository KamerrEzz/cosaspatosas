#!/bin/bash
# Heya! This is my first egg ever, and is made for Lavalink server! 🍤🌌

clear

sleep 1.2

echo -e "\e[93m    __                      \e[96m___       __"
echo -e "\e[93m   / /   ____ __   ______ _\e[96m/ (_)___  / /__"
echo -e "\e[93m  / /   / __  / | / / __  /\e[96m / / __ \/ //_/"
echo -e "\e[93m / /___/ /_/ /| |/ / /_/ /\e[96m / / / / /  ,<"   
echo -e "\e[93m/_____/\__,_/ |___/\__,_/\e[96m_/_/_/ /_/_/|_|"  

echo -e ""

echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Version -> \e[5m\e[92m1.3\e[39m"
echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Made by \e[4m\e[95mKamerrEzz\e[39m\e[0m"

sleep 2.5

clear

sleep 1.5

echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Server \e[4m\e[95mStats\e[39m\e[0m"

echo -e ""

sleep 1.5

echo -e "\e[92m* \e[39m[\e[92mSTATS\e[39m] RAM ->  \e[4m\e[95m"${SERVER_MEMORY}

sleep 1

echo -e "\e[92m* \e[39m[\e[92mSTATS\e[39m] LOCATION ->  \e[4m\e[95m"${P_SERVER_LOCATION}

sleep 1

echo -e "\e[92m* \e[39m[\e[92mSTATS\e[39m] SERVER ID ->  \e[4m\e[95m"${P_SERVER_UUID}

sleep 1

echo -e "\e[92m* \e[39m[\e[92mSTATS\e[39m] SERVER IP ->  \e[4m\e[95m"${SERVER_IP}

sleep 1

echo -e "\e[92m* \e[39m[\e[92mSTATS\e[39m] SERVER PORT ->  \e[4m\e[95m"${SERVER_PORT}

sleep 1

echo -e "\e[92m* \e[39m[\e[92mSTATS\e[39m] LAVALINK VERSION ->  \e[4m\e[95m"$LAVALINK_VERSION

sleep 1

echo -e "\e[92m* \e[39m[\e[92mSTATS\e[39m] TIME ZONE ->  \e[4m\e[95m"${TZ}

echo -e ""

sleep 5.5

clear

sleep 1.5

echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Starting Lavalink installation..."

sleep 3.5

clear

echo -e "\e[92m* \e[39m[\e[\e[93mDEBUG\e[39m] Cleaning server..."
rm -rf /mnt/server/lavalink.jar &> /dev/null
rm -rf /mnt/server/application.yml &> /dev/null

sleep 1

echo -e "\e[92m* \e[39m[\e[\e[93mDEBUG\e[39m] Updating your server..."
apt-get update -y &> /dev/null

sleep 1

echo -e "\e[92m* \e[39m[\e[\e[93mDEBUG\e[39m] Installing dependencies..."
apt-get install curl wget bash -y &> /dev/null

sleep 1.5

echo -e "\e[92m* \e[39m[\e[\e[93mDEBUG\e[39m] Moving directory..."
cd /mnt/server &> /dev/null

sleep 0.5

echo -e "\e[92m* \e[39m[\e[\e[93mDEBUG\e[39m] Downloading Lavalink..."
wget https://github.com/Cog-Creators/Lavalink-Jars/releases/download/${LAVALINK_VERSION}/lavalink.jar &> /dev/null

sleep 1

echo -e "\e[92m* \e[39m[\e[\e[93mDEBUG\e[39m] Creating configuration..."

echo 'server:
  port: ${LAVALINK_VERSION} # Change the port to your server port!
  address: 0.0.0.0
lavalink:
  server:
    password: "HIRO123" # I recommend change that!
    sources:
      youtube: false
      bandcamp: false
      soundcloud: true
      twitch: true
      vimeo: false
      mixer: false
      http: false
      local: false
    bufferDurationMs: 400
    youtubePlaylistLoadLimit: 6 # Number of pages at 100 each
    youtubeSearchEnabled: true
    soundcloudSearchEnabled: true
    gc-warnings: true
    #ratelimit:
      #ipBlocks: ["1.0.0.0/8", "..."] # list of ip blocks
      #excludedIps: ["...", "..."] # ips which should be explicit excluded from usage by lavalink
      #strategy: "RotateOnBan" # RotateOnBan | LoadBalance | NanoSwitch | RotatingNanoSwitch
      #searchTriggersFail: true # Whether a search 429 should trigger marking the ip as failing
      #retryLimit: -1 # -1 = use default lavaplayer value | 0 = infinity | >0 = retry will happen this numbers times

metrics:
  prometheus:
    enabled: false
    endpoint: /metrics

sentry:
  dsn: ""
#  tags:
#    some_key: some_value
#    another_key: another_value

  level:
    root: \e[34mINFO\e[39m
    lavalink: \e[34mINFO\e[39m' >> application.yml

sleep 4

clear

sleep 1.2

echo -e "\e[93m    __                      \e[96m___       __"
echo -e "\e[93m   / /   ____ __   ______ _\e[96m/ (_)___  / /__"
echo -e "\e[93m  / /   / __  / | / / __  /\e[96m / / __ \/ //_/"
echo -e "\e[93m / /___/ /_/ /| |/ / /_/ /\e[96m / / / / /  ,<"   
echo -e "\e[93m/_____/\__,_/ |___/\__,_/\e[96m_/_/_/ /_/_/|_|"  

echo -e ""

echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Made by \e[4m\e[95mKamerrEzz\e[39m\e[0m"

sleep 2.5

echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] \e[92mDone\e[39m! Now you can start your Lavalink server!"

sleep 1

exit