import clipboardy from 'clipboardy';
import colors from 'colors';

const gifLinks = [
    "https://media.discordapp.net/attachments/903607616159232055/1002984680582287401/Lol_Dumbass.gif",
    "https://tenor.com/view/speech-bubble-chicken-gif-26197609",
    "https://media.discordapp.net/attachments/1008195177791377438/1008330435182481428/yhKSpWlO.gif",
    "https://media.discordapp.net/attachments/925855860557746267/991014600403193927/C4BCE10F-5A8C-4C2D-9E60-0F54B15920F9.gif",
    "https://media.discordapp.net/attachments/821914603244093450/978311832269889556/fuckmedaddyharderohyeailovecokcimsocissyfemboy-1.gif",
    "https://media.discordapp.net/attachments/903607616159232055/1002709241896898622/unknown.gif",
    "https://media.discordapp.net/attachments/903607616159232055/1000701167900303420/unknown.gif",
    "https://media.discordapp.net/attachments/959680804429131777/1001412316161654804/deception68_reaction.gif",
    "https://media.discordapp.net/attachments/903607616159232055/1000701644264198255/unknown.gif",
    "https://media.discordapp.net/attachments/748191179132371138/986359178081746954/Adobe_20220429_005827.gif",
    "https://media.discordapp.net/attachments/921823539324137486/985543951878598666/gif.gif",
    "https://media.discordapp.net/attachments/975871362017132554/1000662835405275167/ezgif.com-gif-maker_3.gif",
    "https://cdn.discordapp.com/attachments/717498714259980378/998507541292142612/644BF95C-CD98-4C19-AAB4-7E3578E8EE88.gif",
    "https://media.discordapp.net/attachments/903607616159232055/999615137151471767/unknown.gif",
    "https://media.discordapp.net/attachments/903607616159232055/999614883865833512/unknown.gif",
    "https://media.discordapp.net/attachments/863953159444627480/994393842616905868/EE2C25B0-67F3-4F0E-B505-E4FCF1141E6F.gif",
    "https://media.discordapp.net/attachments/796455341226328088/991928430054621224/0607311D-0E53-4ED0-B916-30E83E376B9E.gif",
    "https://media.discordapp.net/attachments/893462056949407776/970408948526088212/34FC22AD-61E5-4E0F-AE82-0E9B426B3273.gif",
    "https://media.discordapp.net/attachments/903607616159232055/999614096020344913/unknown.gif",
    "https://cdn.discordapp.com/attachments/819984015766323231/956027891760644096/zeti2.gif",
    "https://media.discordapp.net/attachments/903607616159232055/997911180603572264/unknown.gif",
    "https://media.discordapp.net/attachments/967148626725982228/994939435269509150/wow.gif",
    "https://media.discordapp.net/attachments/145634871493132288/901604687910944828/image0-6_1.gif",
    "https://media.discordapp.net/attachments/967148626725982228/994943029603479592/chokeplay.gif",
    "https://media.discordapp.net/attachments/570686290799099920/997954237344518154/togif.gif",
    "https://media.discordapp.net/attachments/864963422381408298/997441977241051146/skirt-1.png.gif",
    "https://media.discordapp.net/attachments/994877151545393186/1002364373186121798/51C412CF-8DC4-4DF7-B1D9-AEC9B2D9E068.gif",
    "https://media.discordapp.net/attachments/903607616159232055/998961377324585081/9CC9A0D3-3D2F-4B3F-A582-6472FEEF4F7F.gif",
    "https://media.discordapp.net/attachments/911569029708255304/993617734623563916/B44865B5-29E2-440A-93BD-BCC14AD7AD33.gif",
    "https://media.discordapp.net/attachments/645732875253186612/997746114793046036/aha-1.gif",
    "https://media.discordapp.net/attachments/909963439533871104/995061175924568095/C0CF7006-CD4B-4C5E-BCD5-4446886117E5.gif",
    "https://media.discordapp.net/attachments/909963439533871104/977927836025364530/cock.gif",
    "https://media.discordapp.net/attachments/390774786805989377/881565460380934144/image0-6.gif",
    "https://tenor.com/view/speech-speech-bubble-meme-joke-arbys-we-have-the-meats-gif-24803181",
    "https://media.discordapp.net/attachments/903607616159232055/994723110471356436/speed-2.gif",
    "https://media.discordapp.net/attachments/903607616159232055/994228427148243045/kangarooselfie-1.gif",
    "https://media.discordapp.net/attachments/981506106167803964/992752961497337886/pedo.gif",
    "https://media.discordapp.net/attachments/969633856560959539/992862078266245200/unkn2adhusdown.gif",
    "https://media.discordapp.net/attachments/898365140016181319/941729759812014112/greed-1.gif",
    "https://media.discordapp.net/attachments/973309807945715742/982050212090609744/r1-2.gif",
    "https://media.discordapp.net/attachments/939991443538321471/959854907102490724/ezgif.com-gif-maker-1.gif",
    "https://media.discordapp.net/attachments/431122901886828554/985278303046881330/EA85DBFF-471B-4394-9CC2-38ECBBE48A83.gif",
    "https://cdn.discordapp.com/attachments/966025152439672832/988173088057331832/3C7E5C69-7702-4A7C-944A-E1EDB7D41C8E.gif",
    "https://media.discordapp.net/attachments/145634871493132288/901604687910944828/image0-6_1.gif",
    "https://tenor.com/view/bad-boy-nice-guy-turn-from-nice-guy-to-slightly-bad-boy-slightly-bad-boy-tik-tok-gif-25518244",
    "https://media.discordapp.net/attachments/903607616159232055/984516006716276777/uncaption.gif",
    "https://media.discordapp.net/attachments/919514319836811305/937700878842990643/scripting.gif?width=665&height=676",
    "https://media.discordapp.net/attachments/944802613378035733/952915180520620032/Untitled2.gif",
    "https://tenor.com/view/saul-goodman-meme-speech-bubble-saul-goodman-gif-25296783",
    "https://media.discordapp.net/attachments/909963439533871104/977932925511290910/9lsj7zyx.gif",
    "https://media.discordapp.net/attachments/882638381752942664/969647873698451496/98DE2B55-AC8B-4FC1-BB05-FF3FAF5FE115.gif",
    "https://media.discordapp.net/attachments/815756146995888128/959215920260190248/co.gif",
    "https://media.discordapp.net/attachments/740982368474628200/964289603131568128/edp_facts-1.gif",
    "https://media.discordapp.net/attachments/903607616159232055/973917241567490049/image2.gif",
    "https://media.discordapp.net/attachments/903607616159232055/977217872290017280/mutt.gif",
    "https://media.discordapp.net/attachments/903607616159232055/976198785233477722/lobber.gif",
    "https://media.discordapp.net/attachments/947362056502386711/957781619555577886/rubber.gif",
    "https://media.discordapp.net/attachments/903607616159232055/975389212138426368/you_.gif",
    "https://media.discordapp.net/attachments/899825895475388527/946609028824445058/pook.gif",
    "https://media.discordapp.net/attachments/903607616159232055/974047246930817034/serbia.gif",
    "https://media.discordapp.net/attachments/939993772643741746/969108988849430579/MemeFeedBot-6.gif",
    "https://media.discordapp.net/attachments/892779595143720980/964405426600935474/femboycum.gif",
    "https://cdn.discordapp.com/attachments/652292364135825418/955945443081220106/34657678255.gif",
    "https://media.discordapp.net/attachments/984690135528534036/996146750593175712/walkies.gif?width=720&height=474",
    "https://media.discordapp.net/attachments/963161257349873734/1015022865525002341/togif.gif?width=587&height=632",
    "https://media.discordapp.net/attachments/938611478922145812/1074798360306929749/461DF0F1-F8C7-4F7C-93CE-8D0D395A11BA.gif",
    "https://media.discordapp.net/attachments/1033115904252317869/1080949039840890920/Speech.gif",
    "https://media.discordapp.net/attachments/1003363264647921775/1061299855932276776/attachment-8.gif",
    "https://media.discordapp.net/attachments/1067350376145223731/1083712004029685790/watermark.gif?width=720&height=172",
    "https://media.discordapp.net/attachments/773909282093269055/1029870045909753986/ezgif.com-gif-maker1.gif?width=720&height=404",
    "https://media.discordapp.net/attachments/898098058817044480/990643099816570880/loved_her.gif?width=625&height=632",
    "https://media.discordapp.net/attachments/985930184052076544/996777025173999716/attachment.gif",
    "https://media.discordapp.net/attachments/977633998807371986/990805495038230558/femboy_fox_troll.gif",
    "https://media.discordapp.net/attachments/1003819992971759718/1011861458029645895/attachment.gif",
    "https://media.discordapp.net/attachments/573247588803805235/1007848234615578634/attachment.gif",
    "https://media.discordapp.net/attachments/708141470716133397/998845498918195270/furrcysc.gif?width=441&height=632",
    "https://media.discordapp.net/attachments/708141470716133397/998845001935110184/furryspeec.gif?width=497&height=632",
    "https://media.discordapp.net/attachments/586787723126243348/975229681131458631/Yeatrue-1-1-1.gif",
    "https://media.discordapp.net/attachments/1003819992971759718/1007844607012380762/attachment.gif",
    "https://media.discordapp.net/attachments/843989160553349161/978013054493130873/shacksays.gif?width=588&height=632",
    "https://images-ext-1.discordapp.net/external/tcY6L6492vp6lACJD-1jqgjZdbyZvXPfIQysowpPmPM/https/media.tenor.com/G4IAjeUG-XMAAAPo/speechbubble-speech.mp4",
    "https://media.discordapp.net/attachments/945843957039001711/1008534866352152626/togif.gif",
    "https://media.discordapp.net/attachments/1003819992971759718/1019738370659848293/attachment.gif",
    "https://media.discordapp.net/attachments/1003819992971759718/1019737072224976936/attachment.gif",
    "https://media.discordapp.net/attachments/1003819992971759718/1019736804921987172/attachment.gif",
    "https://media.discordapp.net/attachments/1082764383429607455/1084555465570123886/20220528162522.gif?width=632&height=632",
    "https://images-ext-2.discordapp.net/external/oHaIFFnlUevW98ObZdXzEt2JlzFxGRieYeCHoW_aWYI/https/media.tenor.com/k7C2lC6unQQAAAPo/%25D1%2585%25D0%25BE%25D0%25BB%25D0%25BE%25D0%25B4%25D0%25B8%25D0%25BB%25D1%258C%25D0%25BD%25D0%25B8%25D0%25BA-speech-bubble.mp4",
    "https://media.discordapp.net/attachments/1003819992971759718/1019738746217824406/attachment.gif",
    "https://media.discordapp.net/attachments/1003819992971759718/1019740914761072740/attachment.gif",
    "https://media.discordapp.net/attachments/1057082202350964746/1073995134007521290/06CBE5FC-C2B4-4CE6-B972-85177D8DACA8-1.gif",
    "https://media.discordapp.net/attachments/1003819992971759718/1007847916066590730/attachment.gif",
    "https://images-ext-2.discordapp.net/external/cmVypZsc0WcVbyYU5zFdDzczT2OVUThbNQdraoKxRg0/https/media.tenor.com/G6fi9jKq9XAAAAPo/sploot-speech-bubble.mp4",
    "https://media.discordapp.net/attachments/1061680647023890532/1083791204791099452/attachment-4.gif",
    "https://images-ext-1.discordapp.net/external/D3om6oR1ArabJQUoApMiFjsLv2nMcrHlQ7maEjXFRK0/https/media.tenor.com/kHXr75h2D0gAAAPo/dog-bubble.mp4",
    "https://media.discordapp.net/attachments/986005758514716754/1079813193750282370/B99F024B-B503-40BE-8041-CBE7E5069076.gif?width=517&height=632",
    "https://media.discordapp.net/attachments/973047375763505273/1018661352744697876/attachment.gif",
    "https://media.discordapp.net/attachments/1061758396690341980/1083465114805600366/tenor.gif",
    "https://media.discordapp.net/attachments/930322878438703104/1081274239446954044/attachment-14.gif",
    "https://media.discordapp.net/attachments/956408751320100894/963468499261468672/t.gif?width=485&height=632",
    "https://images-ext-1.discordapp.net/external/drbqsrCNlStKuFro9fD750WDY8LbEY3l9T9JaFdl_mg/https/media.tenor.com/3Oy34tmzHSUAAAPo/bad-boy-nice-guy.mp4",
    "https://media.discordapp.net/attachments/754402526068998164/1029496232248365096/37459A19-923D-4103-B36A-68415F1A2F37.gif",
    "https://images-ext-2.discordapp.net/external/3JnSoEga-Uzcf3fxJTPFEQXPk5dLxtbb-FSYY23_ffI/https/media.tenor.com/Y6pkS6c-MvYAAAPo/touhou-speech-bubble.mp4",
    "https://media.discordapp.net/attachments/804491292897574944/1006333191419859004/86D41E5D-D901-4976-8C3B-7B2B4625FAA2.gif?width=632&height=632",
    "https://media.discordapp.net/attachments/1043783297119043624/1044463810276245514/speech_bubble.gif?width=720&height=540",
    "https://images-ext-2.discordapp.net/external/QQQuRT7rY2qhWadWixTyOeoNuvytmOawL4jOS9gwf3g/https/media.tenor.com/FqEJsgUkMvMAAAPo/speech-bubble-png-speech-bubble.mp4",
    "https://images-ext-2.discordapp.net/external/IMGe7tRaojpEZWeGP2YS4wIV9D0gaWH6jJoHU_4er5I/https/media.tenor.com/Q_gH7qt5VA8AAAPo/roblox-tuka.mp4",
    "https://media.discordapp.net/attachments/1057138848146149427/1071611188573634590/7F0B8F20-BAC9-41BA-8F72-D7C026EA90B8.gif",
    "https://media.discordapp.net/attachments/1011994616112885872/1017037255367458846/attachment.gif?width=335&height=632",
    "https://images-ext-1.discordapp.net/external/sEOAprHmA76Wz1oxxUwxbrbCSZb1fQ0DHjpstm52iDk/https/media.tenor.com/5CTLXubN-JEAAAPo/nerd-pacman-speechbubble.mp4",
    "https://media.discordapp.net/attachments/903607616159232055/984516006716276777/uncaption.gif?width=698&height=632",
    "https://media.discordapp.net/attachments/651920934927728653/990355817444294747/BF254E80-068F-4FE4-8068-8D018CD483BD.gif",
    "https://images-ext-1.discordapp.net/external/Tpa0Ei1MZLftNr4fhOzfxPt165aktIJxy3JNN6wQ6QQ/https/media.tenor.com/DIW_H1w1RXoAAAPo/kyaru-karyl.mp4",
    "https://images-ext-2.discordapp.net/external/fAt2Vuk70CSzxOdsf8aMTNB32znhTIsV9ACtKO3z43w/https/media.tenor.com/P9biOAenkQMAAAPo/purble-place-purble.mp4",
    "https://media.discordapp.net/attachments/940294974539448360/983453707708555314/attachment.gif",
    "https://media.discordapp.net/attachments/833920013882621992/968640551220019261/pigmemw.gif",
    "https://media.discordapp.net/attachments/737332045881278476/1075041074017480774/california.gif?width=720&height=272",
    "https://media.discordapp.net/attachments/990191291247771690/1060306204238290984/licklick.gif?width=720&height=626",
];

const usedLinks = [];

function getRandomLink() {
  let link = gifLinks[Math.floor(Math.random() * gifLinks.length)];

  while (usedLinks.includes(link)) {
    if (usedLinks.length === gifLinks.length) {
      usedLinks.length = 0;
      console.log(colors.blue('[INFO]') + ' Program ran out of links, resetting...\n');
    }

    link = gifLinks[Math.floor(Math.random() * gifLinks.length)];
  }

  usedLinks.push(link);
  return link;
}

process.stdin.on('data', function (data) {
  if (data.toString().trim() === '') {
    const link = getRandomLink();
    clipboardy.write(link).then(() => {
      console.log(colors.green('[SUCCESS]') + ` Copied to clipboard.`);
    }).catch((err) => {
      console.error(colors.red('[FAIL]') + ` Error copying to clipboard: ${err}`);
    });
  }
});

process.on('uncaughtException', (err) => {
    console.error(colors.red('[ERROR]') + ` Uncaught Exception: ${err}`);
});
  
process.on('unhandledRejection', (reason, promise) => {
    console.error(colors.red('[ERROR]') + ` Unhandled Rejection at: Promise ${promise}, reason: ${reason}`);
});

console.log(colors.blue("[INFO]") + " Press ENTER to generate a random ratio.");
