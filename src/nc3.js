const nc3 = [
  {
    id: 1,
    eng: 'able',
    jp: '『be able to』で～することができる',
  },
  {
    id: 2,
    eng: 'abroad',
    jp: '『海外へ(で)』,『外国に(で)』',
  },
  {
    id: 3,
    eng: 'academy',
    jp: '『学士院』,芸術院',
  },
  {
    id: 4,
    eng: 'accept',
    jp: "(喜んで)〈物〉'を'『受け取る』,〈事〉'を'受け入れる",
  },
  {
    id: 5,
    eng: 'accident',
    jp: '『偶然』,偶発,めぐり合わせ',
  },
  {
    id: 6,
    eng: 'act',
    jp: '『行い』,『行為』',
  },
  {
    id: 7,
    eng: 'activity',
    jp: '『活動』,働き,活力',
  },
  {
    id: 8,
    eng: 'advantage',
    jp: '(…に対する)『有利な立場』,利点,優位',
  },
  {
    id: 9,
    eng: 'advice',
    jp: '『忠告』,助言;(医者・弁護士などの)意見,指示',
  },
  {
    id: 10,
    eng: 'Africa',
    jp: '『アフリカ』({略}Afr.)',
  },
  {
    id: 11,
    eng: 'against',
    jp: '…『に対して』,に逆らって',
  },
  {
    id: 12,
    eng: 'age',
    jp: '年齢',
  },
  {
    id: 13,
    eng: 'Alabama',
    jp: 'アラバマ州',
  },
  {
    id: 14,
    eng: 'along',
    jp: '『…をたどって』,…に沿って',
  },
  {
    id: 15,
    eng: 'already',
    jp: '《肯定文で》『もう』,『すでに』',
  },
  {
    id: 16,
    eng: 'ambulance',
    jp: '救急車',
  },
  {
    id: 17,
    eng: 'among',
    jp: '…『の間に』,に囲まれて',
  },
  {
    id: 18,
    eng: 'anyone',
    jp: '誰か',
  },
  {
    id: 19,
    eng: 'anywhere',
    jp:
      '《疑問文・条件節で》『どこかへ』(『に』),《否定文で》『どこへも』(『にも』)',
  },
  {
    id: 20,
    eng: 'architect',
    jp: '『建築家』,建築技師',
  },
  {
    id: 21,
    eng: 'area',
    jp: '『面積』',
  },
  {
    id: 22,
    eng: 'arrest',
    jp: "(…の罪で)…'を'『逮捕する』,検挙する",
  },
  {
    id: 23,
    eng: 'artist',
    jp: '『芸術家』;(特に)画家,彫刻家,音楽家',
  },
  {
    id: 24,
    eng: 'Asia',
    jp: '『アジア』',
  },
  {
    id: 25,
    eng: 'Association of Tennis\nProfessionals',
    jp: 'テニス協会',
  },
  {
    id: 26,
    eng: 'atomic',
    jp: '『原子の』',
  },
  {
    id: 27,
    eng: 'atomic bomb',
    jp: '原子爆弾',
  },
  {
    id: 28,
    eng: 'Atomic Bomb Dome',
    jp: '原爆ドーム',
  },
  {
    id: 29,
    eng: 'attend',
    jp: "…‘に'『出席する』,参列する,〈学校など〉‘に'通う",
  },
  {
    id: 30,
    eng: 'attitude',
    jp: '(人・物に対する)『姿勢』,身構え,感じ方',
  },
  {
    id: 31,
    eng: 'bank',
    jp: '『土手』,堤',
  },
  {
    id: 32,
    eng: 'base',
    jp: '《文》(人や人の行動・孝えが)『卑しい』,下劣な',
  },
  {
    id: 33,
    eng: 'been',
    jp: 'beの過去分飼形',
  },
  {
    id: 34,
    eng: 'began',
    jp: 'beginの過去形',
  },
  {
    id: 35,
    eng: 'begin',
    jp: '『始まる,開始する』',
  },
  {
    id: 36,
    eng: 'begun',
    jp: 'beginの過去分詞形',
  },
  {
    id: 37,
    eng: 'bicycle',
    jp: '(2輪の)『自転車』',
  },
  {
    id: 38,
    eng: 'boat',
    jp: '『小型の船』,小舟,ボート',
  },
  {
    id: 39,
    eng: 'bomb',
    jp: '『爆弾』;《the bomb》原子爆弾',
  },
  {
    id: 40,
    eng: 'bonjour',
    jp: 'こんにちは(good morning)',
  },
  {
    id: 41,
    eng: 'border',
    jp: '『ヘリ』,縁(ふち)端(はし);端に沿った部分',
  },
  {
    id: 42,
    eng: 'Boris',
    jp: 'ボリス',
  },
  {
    id: 43,
    eng: 'bottle',
    jp: '『びん』;1びんの量',
  },
  {
    id: 44,
    eng: 'box',
    jp: '『箱』',
  },
  {
    id: 45,
    eng: 'Brazil',
    jp: 'ブラジル(南米の共和国…儒都はBrasilia)',
  },
  {
    id: 46,
    eng: 'Brazilian',
    jp: 'ブラジルの',
  },
  {
    id: 47,
    eng: 'building',
    jp: '『建物』,ビルディング;(一般に)建造物',
  },
  {
    id: 48,
    eng: 'business',
    jp: '(生計のための)『職業』,商売;任務,仕事',
  },
  {
    id: 49,
    eng: 'calligraphy',
    jp: '能筆,能書',
  },
  {
    id: 50,
    eng: 'calm',
    jp: '『穏やかな』,静かな;(天候などが)穏やかな',
  },
  {
    id: 51,
    eng: 'Carnival',
    jp: '『祭』,カーニバル',
  },
  {
    id: 52,
    eng: 'carpenter',
    jp: '『大工』(だいく)',
  },
  {
    id: 53,
    eng: 'carport',
    jp: 'カーボート(差し掛け屋根の車庫)',
  },
  {
    id: 54,
    eng: 'castle',
    jp: '『城』,とりで',
  },
  {
    id: 55,
    eng: 'ceiling',
    jp: '『天井』',
  },
  {
    id: 56,
    eng: 'challenge',
    jp: '『挑戦』,試合の申し込み;挑戦状',
  },
  {
    id: 57,
    eng: 'champion',
    jp: '(競技の)『優勝者』;最優秀賞をとった人(動物)',
  },
  {
    id: 58,
    eng: 'championship',
    jp: '優勝者の地位(名誉)',
  },
  {
    id: 59,
    eng: 'character',
    jp: '(人の)『性格』,人格',
  },
  {
    id: 60,
    eng: 'cheer',
    jp: '『歓呼』,かっさい',
  },
  {
    id: 61,
    eng: 'cheerfully',
    jp: '元気に',
  },
  {
    id: 62,
    eng: 'chimney',
    jp: '『煙突』',
  },
  {
    id: 63,
    eng: 'Chinese',
    jp: '『中国の』;中国ふうの',
  },
  {
    id: 64,
    eng: 'Claude Monet',
    jp: 'クロード・モネ',
  },
  {
    id: 65,
    eng: 'clearly',
    jp: '『はっきりと』,明白に',
  },
  {
    id: 66,
    eng: 'coach',
    jp: '(箱形・屋根付き)『大型四輪馬車』',
  },
  {
    id: 67,
    eng: 'collect',
    jp: "(趣味として)…'を'『集』,収集する",
  },
  {
    id: 68,
    eng: 'communication',
    jp: '『伝達』,通報,報道',
  },
  {
    id: 69,
    eng: 'compare',
    jp: "〈二つのもの〉'を'『比較する』,比べる",
  },
  {
    id: 70,
    eng: 'conference',
    jp: '『会議』,協議会',
  },
  {
    id: 71,
    eng: 'connect',
    jp: '『連結する』,結びつける',
  },
  {
    id: 72,
    eng: 'connection',
    jp: 'コネクション、つながり',
  },
  {
    id: 73,
    eng: 'contact',
    jp: '(体・物などの)(…との)『接触』,(…と)触れること',
  },
  {
    id: 74,
    eng: 'content',
    jp: '《複数形で》(容器などにはいっている)『中身』,内容物',
  },
  {
    id: 75,
    eng: 'costume',
    jp: '(ある時代・国民・地方などの特殊な)『服装』,身なり',
  },
  {
    id: 76,
    eng: 'courage',
    jp: '『勇気』,度胸',
  },
  {
    id: 77,
    eng: 'court',
    jp: '(またcourtyard(建物や壁に囲まれた)『中庭』;中庭式の区画',
  },
  {
    id: 78,
    eng: 'crane',
    jp: 'ツル(鶴)',
  },
  {
    id: 79,
    eng: 'creativity',
    jp: '独創性',
  },
  {
    id: 80,
    eng: 'Crown News',
    jp: 'クラウンニュース',
  },
  {
    id: 81,
    eng: 'custom',
    jp: '(社会の)『習慣』,『風習』,慣例',
  },
  {
    id: 82,
    eng: 'daily',
    jp: '『毎日の』,日々の',
  },
  {
    id: 83,
    eng: 'dark',
    jp: '『暗い』やみの',
  },
  {
    id: 84,
    eng: 'David Jones',
    jp: 'デイビッドジョーンズ',
  },
  {
    id: 85,
    eng: 'death',
    jp: '『死』,死亡;死に方,死にざま',
  },
  {
    id: 86,
    eng: 'decade',
    jp: '『10年間』',
  },
  {
    id: 87,
    eng: 'depend',
    jp: '〈人が〉『頼る』,依存する,当てにする',
  },
  {
    id: 88,
    eng: 'depressed',
    jp: '元気のない,憂うつな',
  },
  {
    id: 89,
    eng: 'design',
    jp: '{C}(形式・構造などの)略図,見取り図,設計図',
  },
  {
    id: 90,
    eng: 'designer',
    jp: '『設計者』,デザイナー',
  },
  {
    id: 91,
    eng: 'destroy',
    jp: "…‘を'『破壊する』,打ち壊す",
  },
  {
    id: 92,
    eng: 'difficulty',
    jp: '『難しさ』,困難',
  },
  {
    id: 93,
    eng: 'disappear',
    jp: '『見えなくなる』,消える,姿を消す,消滅する',
  },
  {
    id: 94,
    eng: 'dome',
    jp: '(半球形の)『丸屋根』,丸天井,ドーム',
  },
  {
    id: 95,
    eng: 'done',
    jp: 'doの過去分詞',
  },
  {
    id: 96,
    eng: 'Dr. (Dr)',
    jp: 'ドクター、医者、博士',
  },
  {
    id: 97,
    eng: 'DRAGON BALL',
    jp: 'ドラゴンボール',
  },
  {
    id: 98,
    eng: 'drank',
    jp: 'drinkの過去,《時に米》過去分詞',
  },
  {
    id: 99,
    eng: 'drinking fountain',
    jp: '水飲み場',
  },
  {
    id: 100,
    eng: 'driver',
    jp: '(動物を)追う人,牛追い,馬方',
  },
  {
    id: 101,
    eng: 'drop',
    jp: '〈しずくが〉『したたる』,垂れる《+『down』》',
  },
  {
    id: 102,
    eng: 'drunk',
    jp: 'drinkの過去分詞',
  },
  {
    id: 103,
    eng: 'Dubai',
    jp: 'ドバイ（地名）',
  },
  {
    id: 104,
    eng: 'dying',
    jp: 'dieの現在分詞',
  },
  {
    id: 105,
    eng: 'early',
    jp: '(時間・時期が)『早い』,『初期の』',
  },
  {
    id: 106,
    eng: 'eaten',
    jp: 'eatの過去分詞',
  },
  {
    id: 107,
    eng: 'effort',
    jp: '『努力』,骨折り',
  },
  {
    id: 108,
    eng: 'electricity',
    jp: '『電気』;電流',
  },
  {
    id: 109,
    eng: 'elementary',
    jp: '『初歩の』,基礎の',
  },
  {
    id: 110,
    eng: 'elementary school',
    jp: '小学校',
  },
  {
    id: 111,
    eng: 'embarrassed',
    jp: '恥ずかしい',
  },
  {
    id: 112,
    eng: 'encourage',
    jp: "〈人〉‘を'『勇気づける』,励ます",
  },
  {
    id: 113,
    eng: 'engineering',
    jp: '『工学』',
  },
  {
    id: 114,
    eng: 'England',
    jp: '『イングランド』',
  },
  {
    id: 115,
    eng: 'enter',
    jp: "…‘に'『入る』,入り込む",
  },
  {
    id: 116,
    eng: 'especially',
    jp: '『特に』,特別に;きわだって',
  },
  {
    id: 117,
    eng: 'ever',
    jp: '《疑問文・否定文,また比較級・最上級の文で》『かつて』,今まで',
  },
  {
    id: 118,
    eng: 'experience',
    jp: '(…の)『経験』,体験',
  },
  {
    id: 119,
    eng: 'expert',
    jp: '(…の)『専門家』,『熟練者』',
  },
  {
    id: 120,
    eng: 'express',
    jp: "(言葉で)〈思想・感情など〉‘を'『表現する』,言い表す,述べる",
  },
  {
    id: 121,
    eng: 'fan',
    jp: '『うちわ』扇',
  },
  {
    id: 122,
    eng: 'fan',
    jp: '『うちわ』扇',
  },
  {
    id: 123,
    eng: 'fascinate',
    jp: "…‘を'魅惑する,魅了する,うっとりさせる",
  },
  {
    id: 124,
    eng: 'fashion',
    jp: '(…の)『流行』,はやり',
  },
  {
    id: 125,
    eng: 'felt',
    jp: 'feelの過去・過去分詞',
  },
  {
    id: 126,
    eng: 'fighting spirit',
    jp: '闘争心',
  },
  {
    id: 127,
    eng: 'fill',
    jp: "〈容器など〉‘を'『いっぱいにする』,満たす,‘に'つぐ",
  },
  {
    id: 128,
    eng: 'finally',
    jp: '『最後に』(at the end)',
  },
  {
    id: 129,
    eng: 'finish',
    jp: '…『終える』,済ます',
  },
  {
    id: 130,
    eng: 'fireplace',
    jp: '(壁に取付けた)『暖炉』',
  },
  {
    id: 131,
    eng: 'float',
    jp: '(液体・気体に)『浮く』,浮かぶ',
  },
  {
    id: 132,
    eng: 'Florida',
    jp: 'フロリダ州',
  },
  {
    id: 133,
    eng: 'foreign',
    jp: '『外国の』;外国からの;外国との',
  },
  {
    id: 134,
    eng: 'fought',
    jp: 'fightの過去・過去分詞',
  },
  {
    id: 135,
    eng: 'found',
    jp: 'findの過去・過去分詞',
  },
  {
    id: 136,
    eng: 'France',
    jp: '『フランス』(ヨーロッパの共和国;首都はParis)',
  },
  {
    id: 137,
    eng: 'French',
    jp: '『フランスの』',
  },
  {
    id: 138,
    eng: 'friendship',
    jp: '友情,親交',
  },
  {
    id: 139,
    eng: 'gate',
    jp: '(…への)『門』,通用門',
  },
  {
    id: 140,
    eng: 'gather',
    jp: "〈人・物〉‘を'『集める』,集合させる",
  },
  {
    id: 141,
    eng: 'George Lucus',
    jp: 'ジョージ・ルーカス',
  },
  {
    id: 142,
    eng: 'German',
    jp: '『ドイツの』;『ドイツ人の』;ドイツ語の',
  },
  {
    id: 143,
    eng: 'Germany',
    jp: '『ドイツ』(第二次世界大戦後1949年東西両ドイツに分割された)',
  },
  {
    id: 144,
    eng: 'grade',
    jp: '『学年』(小学校から12年まで通算する)',
  },
  {
    id: 145,
    eng: 'graduate',
    jp: '(…を)『卒業する』',
  },
  {
    id: 146,
    eng: 'grew',
    jp: 'growの過去形',
  },
  {
    id: 147,
    eng: 'habit',
    jp: 'くせ、習慣',
  },
  {
    id: 148,
    eng: 'hardship',
    jp: '『辛苦』,苦難,難儀',
  },
  {
    id: 149,
    eng: 'hate',
    jp: "…‘を'『憎む』,『ひどくきらう』",
  },
  {
    id: 150,
    eng: 'headache',
    jp: '『頭痛』',
  },
  {
    id: 151,
    eng: 'heard',
    jp: 'hearの過去・過去分詞',
  },
  {
    id: 152,
    eng: 'hero',
    jp: '『英雄』,勇士,ヒーロー',
  },
  {
    id: 153,
    eng: 'high school',
    jp: '『ハイスクール』',
  },
  {
    id: 154,
    eng: 'highlight',
    jp: '(絵画・写真などの)最も明るい部分,ハイライト',
  },
  {
    id: 155,
    eng: 'himself',
    jp: '《強意用法》',
  },
  {
    id: 156,
    eng: 'homeland',
    jp: '故国,自国',
  },
  {
    id: 157,
    eng: 'homesick',
    jp: 'ホームショクの,自分の家(国)をなつかしがる',
  },
  {
    id: 158,
    eng: 'honesty',
    jp: '『正直』,実直,誠実',
  },
  {
    id: 159,
    eng: 'host',
    jp: 'ホスト（受け入れる人）',
  },
  {
    id: 160,
    eng: 'hug',
    jp: "‘を'『抱き締める』;(両腕・ひざなどで)…‘を'ぎゅっと締めつける",
  },
  {
    id: 161,
    eng: 'humor',
    jp: 'ユーモア',
  },
  {
    id: 162,
    eng: 'importance',
    jp: '『重要性』,重大さ',
  },
  {
    id: 163,
    eng: 'impossible',
    jp: '『不可能な』,できない',
  },
  {
    id: 164,
    eng: 'impress',
    jp: "(…で)…‘を'『感銘させる』,‘に'印象づける",
  },
  {
    id: 165,
    eng: 'improve',
    jp: "…‘を'『もっとよくする』,改良する,改善する",
  },
  {
    id: 166,
    eng: 'influence',
    jp: '『影響』,感化,効力',
  },
  {
    id: 167,
    eng: 'injure',
    jp: "…‘を'『傷つける』,‘に'損害を与える",
  },
  {
    id: 168,
    eng: 'instead',
    jp: '『その代りとして』,それよりも',
  },
  {
    id: 169,
    eng: 'intense',
    jp: '(感情・性質などが)『激しい』,強烈な,熱心な',
  },
  {
    id: 170,
    eng: 'interest',
    jp: '(人・物事に対する)『興味』,『関心』',
  },
  {
    id: 171,
    eng: 'international',
    jp: '『国際的な』,国家間の,万国の',
  },
  {
    id: 172,
    eng: 'interview',
    jp: 'インタビュー,面接,面会',
  },
  {
    id: 173,
    eng: 'interviewer',
    jp: '面接する人,会見者;訪問記者',
  },
  {
    id: 174,
    eng: 'Japanese-Brazilian',
    jp: '日系ブラジル人',
  },
  {
    id: 175,
    eng: 'joke',
    jp: '『冗談』,『笑い話』',
  },
  {
    id: 176,
    eng: 'judge',
    jp: '『裁判官』,判事',
  },
  {
    id: 177,
    eng: 'juice',
    jp: 'ジュース;(植物の)樹液',
  },
  {
    id: 178,
    eng: 'justice',
    jp: '『正義』,正しさ;『公平』,公正',
  },
  {
    id: 179,
    eng: 'Kenya',
    jp: 'ケニア',
  },
  {
    id: 180,
    eng: 'kill',
    jp: "〈人・動物〉‘を'『殺す』,死亡させる",
  },
  {
    id: 181,
    eng: 'knit',
    jp: "〈織物・服など〉‘を'『編む』",
  },
  {
    id: 182,
    eng: 'Korea',
    jp: '『韓国』',
  },
  {
    id: 183,
    eng: 'Korean',
    jp: '韓国の、韓国人(の),韓国人,朝鮮人;朝鮮語',
  },
  {
    id: 184,
    eng: 'lake',
    jp: '『湖』',
  },
  {
    id: 185,
    eng: 'lamp',
    jp: '(電気・ガス・石油などの)『ランプ』,灯火,明かり',
  },
  {
    id: 186,
    eng: 'last',
    jp: '『最後の』;(行為・でき事について)最後の',
  },
  {
    id: 187,
    eng: 'laugh',
    jp: '(声を立てて)〈人が〉『笑う』',
  },
  {
    id: 188,
    eng: 'laughter',
    jp: '『笑い』,笑い声',
  },
  {
    id: 189,
    eng: 'law',
    jp: '『法』',
  },
  {
    id: 190,
    eng: 'lawyer',
    jp: '『弁護士』;法律学者',
  },
  {
    id: 191,
    eng: 'lead',
    jp: "‘を'『導く』,案内する",
  },
  {
    id: 192,
    eng: 'led',
    jp: 'leadの過拒・過去分詞',
  },
  {
    id: 193,
    eng: 'left',
    jp: '去った、過ぎた',
  },
  {
    id: 194,
    eng: 'leopard',
    jp: 'ヒョウ',
  },
  {
    id: 195,
    eng: 'lie',
    jp: '『うそをつく』『横たわる』,横になる',
  },
  {
    id: 196,
    eng: 'Lincoln Memorial',
    jp: 'リンカーン記念',
  },
  {
    id: 197,
    eng: 'lion',
    jp: '『ライオン』,しし',
  },
  {
    id: 198,
    eng: 'lost',
    jp: 'loseの過去・渦去分詞',
  },
  {
    id: 199,
    eng: 'lucky',
    jp: '『幸運の』,運のよい',
  },
  {
    id: 200,
    eng: 'lucky break',
    jp: 'けがの功名',
  },
  {
    id: 201,
    eng: 'lying',
    jp: 'lieの現在分詞',
  },
  {
    id: 202,
    eng: 'Malawi',
    jp: 'マラウィ(アフリカ南東部にある共和国)',
  },
  {
    id: 203,
    eng: 'manage',
    jp: "…‘を'『管理する』,運営する;…‘を'処理する",
  },
  {
    id: 204,
    eng: 'manner',
    jp: '『マナー』『作法』,仕方',
  },
  {
    id: 205,
    eng: 'Maria',
    jp: 'マリア（人名）',
  },
  {
    id: 206,
    eng: 'marry',
    jp: "…‘と'『結婚する』,‘を夫(妻)にする",
  },
  {
    id: 207,
    eng: 'Martin Luther King，Jr.',
    jp: 'マーティン・ルーサー・キング（人名）',
  },
  {
    id: 208,
    eng: 'match',
    jp: '(1本の)『まっち』 『合致する』',
  },
  {
    id: 209,
    eng: 'maybe',
    jp: '『たぶん』,おそらく,ことによると',
  },
  {
    id: 210,
    eng: 'meant',
    jp: 'meanの過去・過去分詞',
  },
  {
    id: 211,
    eng: 'medicine',
    jp: '『医学』,医術;医[師]業',
  },
  {
    id: 212,
    eng: 'memorial',
    jp: '『記念の』,追悼の',
  },
  {
    id: 213,
    eng: 'men',
    jp: 'manの複数形',
  },
  {
    id: 214,
    eng: 'million',
    jp: '『100万』',
  },
  {
    id: 215,
    eng: 'mind',
    jp: '『心』,精神',
  },
  {
    id: 216,
    eng: 'miss',
    jp: '未婚婦人;《複数形で》少女(girl)',
  },
  {
    id: 217,
    eng: 'mistake',
    jp: '『誤り』,『間違い』;誤解,思い違い',
  },
  {
    id: 218,
    eng: 'model',
    jp: '『モデル』『模型』',
  },
  {
    id: 219,
    eng: 'money',
    jp: '『金』(かね),金銭;通貨',
  },
  {
    id: 220,
    eng: 'Mongolia',
    jp: '蒙古・モンゴリア(モンゴル人民共和国を含む東中央アジア地域)',
  },
  {
    id: 221,
    eng: 'Montgomery',
    jp: 'モントゴメリー(米国Alabama州の州都)',
  },
  {
    id: 222,
    eng: 'motto',
    jp: '『モットー』,教え(戒め)とする言葉,座右の銘',
  },
  {
    id: 223,
    eng: 'movement',
    jp: '(…の)『運動』,『動き』;移動',
  },
  {
    id: 224,
    eng: 'myself',
    jp: '『私自身』',
  },
  {
    id: 225,
    eng: 'nation',
    jp: '《集合的に》『国民』(people)',
  },
  {
    id: 226,
    eng: 'national',
    jp: '『国民の』;『国家の』',
  },
  {
    id: 227,
    eng: 'necessary',
    jp: '(物事が)『必要な』,なくてはならない',
  },
  {
    id: 228,
    eng: 'Newcomer of the Year',
    jp: '今年の新人',
  },
  {
    id: 229,
    eng: 'Nobel Peace Prize',
    jp: 'ノーベル平和賞',
  },
  {
    id: 230,
    eng: 'note',
    jp: '《複数形で》『覚え書き』,控え,メモ',
  },
  {
    id: 231,
    eng: 'nurse',
    jp: '『看護人』,看護婦',
  },
  {
    id: 232,
    eng: "nurse's office",
    jp: '看護室',
  },
  {
    id: 233,
    eng: 'oil',
    jp: '『油』;油状物',
  },
  {
    id: 234,
    eng: 'Olympics',
    jp: 'オリンピック',
  },
  {
    id: 235,
    eng: 'order',
    jp: '《しばしば複数形で》『命令』,指図,指令',
  },
  {
    id: 236,
    eng: 'organize',
    jp: '組織する、整える',
  },
  {
    id: 237,
    eng: 'outlook',
    jp: "…‘の'『見通し』,見込み",
  },
  {
    id: 238,
    eng: 'overcome',
    jp: "(試合・戦闘などで)…‘に'『打ち勝つ』,‘を'圧倒する(conquer)",
  },
  {
    id: 239,
    eng: 'overseas',
    jp: '海を越えて,外国へ(abroad)',
  },
  {
    id: 240,
    eng: 'paid',
    jp: 'payの過去・過去分詞',
  },
  {
    id: 241,
    eng: 'paper crane',
    jp: '折り紙のツル',
  },
  {
    id: 242,
    eng: 'Paralympics',
    jp: 'パラリンピック',
  },
  {
    id: 243,
    eng: 'particular',
    jp: '『特にこの』(『あの』),特定の',
  },
  {
    id: 244,
    eng: 'passion',
    jp: '『激しい感情』,情念,熱情',
  },
  {
    id: 245,
    eng: 'past',
    jp: '『過去』,終わった(over)',
  },
  {
    id: 246,
    eng: 'Peace Memorial Park',
    jp: '平和記念公園',
  },
  {
    id: 247,
    eng: 'peaceful',
    jp: '『平和な』,平和的な,平和を好む',
  },
  {
    id: 248,
    eng: 'perform',
    jp: "〈困難なことなど〉‘を'『成し遂げる』",
  },
  {
    id: 249,
    eng: 'performance',
    jp: '(…の)『遂行』,実行,履行《+『of』+『名』》',
  },
  {
    id: 250,
    eng: 'performer',
    jp: '《修飾語を伴って》実行する人,遂行する人',
  },
  {
    id: 251,
    eng: 'period',
    jp: '(あることが続く)『期間』',
  },
  {
    id: 252,
    eng: 'Philippines',
    jp: 'フィリピン共和国(正式にはthe Republic of the Philippines)',
  },
  {
    id: 253,
    eng: 'physically challenged',
    jp: '肉体的な挑戦',
  },
  {
    id: 254,
    eng: 'pleasure',
    jp: '(…の)『喜び』,『楽しみ』《+『of』+『名』(do『ing』)》',
  },
  {
    id: 255,
    eng: 'politician',
    jp: '『政治家』',
  },
  {
    id: 256,
    eng: 'popular culture',
    jp: '人気のある文化',
  },
  {
    id: 257,
    eng: 'positive',
    jp: '『肯定した,同意の』',
  },
  {
    id: 258,
    eng: 'possible',
    jp: '(物事が)『可能な』,実行できる',
  },
  {
    id: 259,
    eng: 'postcard',
    jp: '『郵便はがき』',
  },
  {
    id: 260,
    eng: 'poster',
    jp: 'ポスター,びら',
  },
  {
    id: 261,
    eng: 'pressure',
    jp: '圧力,圧力の強さ',
  },
  {
    id: 262,
    eng: 'principal',
    jp: '(重要性・地位・価値などが)『第1の』;おもな,主要な',
  },
  {
    id: 263,
    eng: "principal's office",
    jp: '校長室',
  },
  {
    id: 264,
    eng: 'print',
    jp: "…‘を'『印刷する』",
  },
  {
    id: 265,
    eng: 'professional',
    jp: '《名詞の前にのみ用いて》『専門職の』;(一般に)職業の',
  },
  {
    id: 266,
    eng: 'professor',
    jp: '(大学の)『教授』',
  },
  {
    id: 267,
    eng: 'purpose',
    jp: '(人の抱く)『目的』,目標,意図',
  },
  {
    id: 268,
    eng: 'quiet',
    jp: '『静かな』,ひっそりした,閑静な',
  },
  {
    id: 269,
    eng: 'quit',
    jp: "…‘を'『やめる』,『中止する』",
  },
  {
    id: 270,
    eng: 'racket',
    jp: 'ばか騒ぎ,大騒ぎ;騒動(uproar)',
  },
  {
    id: 271,
    eng: 'raise',
    jp: "…‘を'『上げる』,持ち上げる;〈倒れた物〉‘を'起こす",
  },
  {
    id: 272,
    eng: 'reality',
    jp: '現実[性],実在',
  },
  {
    id: 273,
    eng: 'realize',
    jp: '悟る、思いつく',
  },
  {
    id: 274,
    eng: 'receive',
    jp: "〈贈与・送付されたもの〉‘を'『受け取る』,受ける",
  },
  {
    id: 275,
    eng: 'recycle',
    jp: "〈廃物など〉‘を'再利用する",
  },
  {
    id: 276,
    eng: 'reduce',
    jp: "『減らす』,小さくする;〈程度・地位など〉‘を'『下げる』",
  },
  {
    id: 277,
    eng: 'refugee',
    jp: '亡命者,逃亡者,難民',
  },
  {
    id: 278,
    eng: 'relay',
    jp: '(駅馬車などの)替え馬,継ぎ馬',
  },
  {
    id: 279,
    eng: 'remind',
    jp: "〈人〉‘に'『思い出させる』,念を押す:",
  },
  {
    id: 280,
    eng: 'report',
    jp: '(…についての(『報告』,『報道』',
  },
  {
    id: 281,
    eng: 'research',
    jp: '『研究』,『調査』',
  },
  {
    id: 282,
    eng: 'reuse',
    jp: "…‘を'再使用する,再生する",
  },
  {
    id: 283,
    eng: 'ride',
    jp: '(馬・自転車・電車などに)『乗って行く』,『乗っている』馬に乗る',
  },
  {
    id: 284,
    eng: 'right',
    jp: '正しい、権利',
  },
  {
    id: 285,
    eng: 'Rio de Janeiro',
    jp: 'リオデジャネイロ(Brazilの旧首都で海港)',
  },
  {
    id: 286,
    eng: 'roof',
    jp: '『屋根』;屋上;《比喩(ひゆ)的に》家,家庭',
  },
  {
    id: 287,
    eng: 'Russia',
    jp: '(帝政)『ロシア』',
  },
  {
    id: 288,
    eng: 'Samba Parade',
    jp: 'サンバのお祭り',
  },
  {
    id: 289,
    eng: 'save',
    jp: '『救う』,救援する',
  },
  {
    id: 290,
    eng: 'Sawyer',
    jp: '木びき,木をひく人',
  },
  {
    id: 291,
    eng: 'scene',
    jp: '『風景』『現場』,場所',
  },
  {
    id: 292,
    eng: 'scientist',
    jp: '『科学者』,自然科学者',
  },
  {
    id: 293,
    eng: 'seat',
    jp: '『腰掛け』',
  },
  {
    id: 294,
    eng: 'section',
    jp: '(全体を構成する個々の)『部分』,部品',
  },
  {
    id: 295,
    eng: 'seen',
    jp: 'seeの過去分詞',
  },
  {
    id: 296,
    eng: 'select',
    jp: "(最高・最適のものとして)…‘を'『選ぶ』,選抜する,選出する",
  },
  {
    id: 297,
    eng: 'sell',
    jp: "…‘を'『売る』,売却する",
  },
  {
    id: 298,
    eng: 'sent',
    jp: 'sendの過去・過去分詞',
  },
  {
    id: 299,
    eng: 'serious',
    jp: '『まじめな』,厳粛な',
  },
  {
    id: 300,
    eng: 'serve',
    jp: "〈人〉‘に'『仕える』,‘の'役に立つ;〈社会など〉‘に'尽くす",
  },
  {
    id: 301,
    eng: 'set',
    jp: "‘を'『置く』・すえる・(ある物に)…‘を'『つける』",
  },
  {
    id: 302,
    eng: 'share',
    jp: '《時にa~》『分け前』,取り分',
  },
  {
    id: 303,
    eng: 'shine',
    jp: '『光る,輝く』,樋り',
  },
  {
    id: 304,
    eng: 'shock',
    jp: '(衝突・爆発などの)『衝撃』,(地震の)震動,電撃',
  },
  {
    id: 305,
    eng: 'shoot',
    jp: "(…に)〈銃・大砲〉‘を'『撃つ』,発射する,〈弓など〉‘を'射る",
  },
  {
    id: 306,
    eng: 'shot',
    jp: 'shootの過去・過去分詞',
  },
  {
    id: 307,
    eng: 'should',
    jp:
      '《単純未来》・《意志未来》『すべきである』,するのが当然である,しなくてはならない',
  },
  {
    id: 308,
    eng: 'shown',
    jp: 'showの過去分詞',
  },
  {
    id: 309,
    eng: 'shy',
    jp: '(人が)『恥ずかしがり屋の』,内気な',
  },
  {
    id: 310,
    eng: 'shyness',
    jp: '恥ずかしさ,内気;おく病',
  },
  {
    id: 311,
    eng: 'sickness',
    jp: '『病気でいること』;(個々の)『病気』',
  },
  {
    id: 312,
    eng: 'simple',
    jp: '『簡単な』容易な,分かりやすい',
  },
  {
    id: 313,
    eng: 'since',
    jp: '『以後』[『ずっと』],…以来[ずっと]',
  },
  {
    id: 314,
    eng: 'situation',
    jp: '(人の)『立場』,状態,境遇',
  },
  {
    id: 315,
    eng: 'skate',
    jp: 'スケート',
  },
  {
    id: 316,
    eng: 'skill',
    jp: '(…の)『熟練』,技量,腕《+『in』+『名』(do『ing』)》',
  },
  {
    id: 317,
    eng: 'skin',
    jp: '(人・動物の)『皮膚』,肌',
  },
  {
    id: 318,
    eng: 'slump',
    jp: '(…に)くずれるように落ちる(倒れる,沈み込む)',
  },
  {
    id: 319,
    eng: 'smell',
    jp: '『かぐ』,においをかぐ',
  },
  {
    id: 320,
    eng: 'southeastern',
    jp: '南東の,南東へ向かう',
  },
  {
    id: 321,
    eng: 'Spain',
    jp: '『スペイン』',
  },
  {
    id: 322,
    eng: 'spent',
    jp: 'spendの過去・過去分詞',
  },
  {
    id: 323,
    eng: 'statue',
    jp: '『像』,彫像,立像',
  },
  {
    id: 324,
    eng: 'stiff',
    jp: '(物が)『堅い』,しなやかでない',
  },
  {
    id: 325,
    eng: 'stood',
    jp: 'standの過去・過去分詞',
  },
  {
    id: 326,
    eng: 'strongly',
    jp: '『強く』,激しく',
  },
  {
    id: 327,
    eng: 'struggle',
    jp: '『もがく』,あがく',
  },
  {
    id: 328,
    eng: 'success',
    jp: '『成功』,好結果',
  },
  {
    id: 329,
    eng: 'such',
    jp: '『こんな』,あんな',
  },
  {
    id: 330,
    eng: 'suddenly',
    jp: '『突然に』,だしぬけに',
  },
  {
    id: 331,
    eng: 'support',
    jp: "…‘を'『支える』",
  },
  {
    id: 332,
    eng: 'survive',
    jp: '…の後まで生きる, …より長生きする; 助かる; 耐える・生き残る; 残存する',
  },
  {
    id: 333,
    eng: 'tail',
    jp: '『尾』,しっぽ',
  },
  {
    id: 334,
    eng: 'taste',
    jp: '『味覚』',
  },
  {
    id: 335,
    eng: 'taught',
    jp: 'teachの過去・過去分詞',
  },
  {
    id: 336,
    eng: "teachers' room",
    jp: '先生の部屋',
  },
  {
    id: 337,
    eng: 'teamwork',
    jp: '協同作業',
  },
  {
    id: 338,
    eng: 'temple',
    jp: 'お寺、こめかみ,側頭',
  },
  {
    id: 339,
    eng: 'theme',
    jp: '『主題』,論題,題[目],テーマ',
  },
  {
    id: 340,
    eng: 'thinking',
    jp: '『思考力のある』,考える;思慮深い',
  },
  {
    id: 341,
    eng: 'though',
    jp: '『…にもかかわらず』,…だけれども)although)',
  },
  {
    id: 342,
    eng: 'told',
    jp: 'tell の過去・過去分詞',
  },
  {
    id: 343,
    eng: 'tour',
    jp: '(数か所に立ち寄る比較的長期の)(…の)『観光旅行』',
  },
  {
    id: 344,
    eng: 'tournament',
    jp: 'トーナメント',
  },
  {
    id: 345,
    eng: 'tragedy',
    jp: '悲劇',
  },
  {
    id: 346,
    eng: 'travel',
    jp: '(特に遠くへ)『旅行する』',
  },
  {
    id: 347,
    eng: 'TRUE',
    jp: '真実',
  },
  {
    id: 348,
    eng: 'two-year-old',
    jp: '二年前の',
  },
  {
    id: 349,
    eng: 'type',
    jp: '(…の)『型』,タイプ,類型,種類(kind)《+of+名》',
  },
  {
    id: 350,
    eng: 'understood',
    jp: 'understandの過去・過去分詞',
  },
  {
    id: 351,
    eng: 'unfair',
    jp: '不公平な,不当な,かたよった',
  },
  {
    id: 352,
    eng: 'uniform',
    jp: '『不変の』,一定の',
  },
  {
    id: 353,
    eng: 'United States',
    jp: 'アメリカ合衆国',
  },
  {
    id: 354,
    eng: 'university',
    jp: '『大学』',
  },
  {
    id: 355,
    eng: 'upset',
    jp: '『怒っている』',
  },
  {
    id: 356,
    eng: 'US',
    jp: 'アメリカ',
  },
  {
    id: 357,
    eng: 'victory',
    jp: '(…に対する)『勝利』',
  },
  {
    id: 358,
    eng: 'Washington, D.C.',
    jp: 'ワシントンDC（地名）',
  },
  {
    id: 359,
    eng: 'waste',
    jp: "‘を'『むだに使う』,浪費する",
  },
  {
    id: 360,
    eng: 'whistle',
    jp: '『口笛を吹く』;口笛を吹いて合図する',
  },
  {
    id: 361,
    eng: 'wild',
    jp: '『野生の』',
  },
  {
    id: 362,
    eng: 'William Kamkwamba',
    jp: 'ウィリアム カムワクンバ',
  },
  {
    id: 363,
    eng: 'wind',
    jp: '『風』',
  },
  {
    id: 364,
    eng: 'windmill',
    jp: '『風車』',
  },
  {
    id: 365,
    eng: 'winner',
    jp: '『勝利者』,優勝者;(競馬の)勝ち馬',
  },
  {
    id: 366,
    eng: 'Winter',
    jp: '『冬』,冬季',
  },
  {
    id: 367,
    eng: 'wire',
    jp: '『針金』,金属線',
  },
  {
    id: 368,
    eng: 'wish',
    jp: '『であればよいのにと思う』',
  },
  {
    id: 369,
    eng: 'won',
    jp: 'win の過去・過去分詞',
  },
  {
    id: 370,
    eng: 'wood',
    jp: '(樹木の)木質部,木質',
  },
  {
    id: 371,
    eng: 'wore',
    jp: 'wearの過去',
  },
  {
    id: 372,
    eng: 'World Cup',
    jp: 'ワールドカップ',
  },
  {
    id: 373,
    eng: 'would',
    jp: '《時制の一致により will の過去形として》',
  },
  {
    id: 374,
    eng: 'wrap',
    jp: "(人・物に)…‘を'『巻きつける』,掛ける",
  },
  {
    id: 375,
    eng: 'writer',
    jp: '『作家』,著者,筆者',
  },
  {
    id: 376,
    eng: 'wrong',
    jp: '『正しくない』,間違っている,誤った',
  },
  {
    id: 377,
    eng: 'yearbook',
    jp: '年鑑,年報',
  },
];

export default nc3;
