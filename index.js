import clipboardy from 'clipboardy';

var counterRatios = [
    "https://media.discordapp.net/attachments/903607616159232055/1002984680582287401/Lol_Dumbass.gif",
    "https://media.discordapp.net/attachments/821914603244093450/978311832269889556/fuckmedaddyharderohyeailovecokcimsocissyfemboy-1.gif",
    "https://media.discordapp.net/attachments/903607616159232055/1002709241896898622/unknown.gif",
    "https://media.discordapp.net/attachments/903607616159232055/1000701167900303420/unknown.gif",
    "https://media.discordapp.net/attachments/959680804429131777/1001412316161654804/deception68_reaction.gif",
    "https://media.discordapp.net/attachments/903607616159232055/1000701644264198255/unknown.gif",
    "https://media.discordapp.net/attachments/921823539324137486/985543951878598666/gif.gif",
    "https://media.discordapp.net/attachments/975871362017132554/1000662835405275167/ezgif.com-gif-maker_3.gif",
    "https://cdn.discordapp.com/attachments/717498714259980378/998507541292142612/644BF95C-CD98-4C19-AAB4-7E3578E8EE88.gif",
    "https://media.discordapp.net/attachments/903607616159232055/999615137151471767/unknown.gif",
    "https://media.discordapp.net/attachments/903607616159232055/999614883865833512/unknown.gif",
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
    "https://cdn.discordapp.com/attachments/652292364135825418/955945443081220106/34657678255.gif"
];

let generatedRatio = counterRatios[Math.floor(Math.random() * counterRatios.length)];

console.log(generatedRatio);

try {
    clipboardy.writeSync(generatedRatio);
} catch (err) {
    throw err;
}
