// apks.js

function handleCommand(conn, from, selo, command) {
    let bla;
  
    switch (command) {
      case 'nintendo2.5k':
        bla = `aqui esta o link QUASE 2.500 JOGOS DE SUPER NINTENDO https://drive.google.com/drive/folders/1_0fg1KJzP96sOdETkAMuwM0jx7VmhozP`;
        break;
            
  	case 'spotify':
        bla = `aqui esta o link 
        
        https://www.mediafire.com/file/zv57wvntp7zvzxd/Spotify_PREMIUM_-_v8.8.40.470_Tekmods.com.apk/file`;
        break;
            
      case 'payday':
        bla = `aqui esta o link do PAYDAY: Crime War MOBILE V2023.0.1 

https://www.mediafire.com/file/xn49mrhblb57twb/PAYDAY__Crime_War_2023.1.1_Tekmods.com.apk/file`;
        break;
  
      case 'vsco':
        bla = `aqui esta o link do VSCO Premium V323

https://www.mediafire.com/file/xtauaw4xv083hp8/VSCO_PRO_-_v323_Tekmods.com.apk/file`;
        break;
  
      case 'picsart':
        bla = `aqui esta o link do PicsArt Gold V22.4.0 

https://www.mediafire.com/file/ys4eu3n678hxzap/Picsart_GOLD_-_v22.4.0_Wanbit.apk/file`;
        break;
  
      case 'minecraft':
        bla = `aqui esta o link do minecraft V1.20.04.24 link:

https://www.mediafire.com/file/zw70u5oj57stpl6/Minecraft-1.20.0.24_Apks_Uteis.apk/file`;
        break;
  
      case 'remini':
        bla = `aqui esta o link do remini V3.7.227... link:

https://www.mediafire.com/file/bjmf50dxp000x81/Remini_v3.7.227.202198591_WANBIT.apk/file`;
        break;
  
      case 'vanced':
        bla = `aqui esta o link do vanced 4.2.82.104 link:

https://www.mediafire.com/file/srqowtel8bqyt6x/Vanced_4.2.82.104_%255BWANBIT%255D.apk/file`;
        break;
  
      case 'esound':
        bla = `aqui esta o link do esound link: 

https://www.mediafire.com/file/amaz8b8wbsh68q9/eSound%2528WANBIT%2529.apk/file`;
        break;
  
      case 'capcut':
        bla = `aqui esta o link do capcut V8.3.0  link: 

https://www.mediafire.com/file/k2anjr6j9m35ku6/CapCut_V8.3.0_%255BMod%255D_%255BWANBIT%255D.apk/file`;
        break;
  
      default:
        // Comando desconhecido
        bla = `Comando desconhecido. Por favor, verifique o comando digitado.`;
        break;
    }
  
    conn.sendMessage(from, { text: bla }, { quoted: selo });
  }
  
  module.exports = {
    handleCommand,
  };
  