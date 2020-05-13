import React from 'react';
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import facebook from './assets/facebook.svg'
import './App.css';

const url = 'https://about.botor.no/'
const text = 'A guide for the bot curious, by FOREIGN OBJECTS.';

function twitterShare() {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
}  

function facebookShare() {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

function App() {
  return (
    <div className="App">
      <aside>
        <div className="title">A guide for the bot curious</div>
        <div className="credits"> Concept, design, development, writing by <a href="https://www.foreignobjects.net/" rel="noopener noreferrer" target="_blank" >FOREIGN OBJECTS</a> for <a href="https://botor.no/">BOT OR NOT</a>, a Mozilla Creative Awards project.</div>
        
        <div className='share'>
          <a id="twitter" href={twitterShare()} rel="noopener noreferrer" target="_blank" > <img src={twitter} alt='twitter share' /> </a>

          <a id="instagram" href="https://instagram.com/foreignobj" rel="noopener noreferrer" target="_blank" ><img src={instagram} alt='instagram share' /> </a>          
          
          <a id="facebook" href={facebookShare()} rel="noopener noreferrer" target="_blank" ><img src={facebook} alt='facebook share' /> </a>

        </div>
      </aside>
      <main> 
        <div className="TLDR"> 
          <h3>TLDR</h3>
          <li>Be prepared for a rapid expansion of boring chatbots in coming years. Not nearly smart enough to replace your friends, but effective enough to replace some of their jobs.</li>
          <li>New regulatory instruments will be blunt and largely unenforceable without a wholesale legal reassessment of digital platforms which allow automated disinformation to thrive.</li>
          <li>The internet will no longer be thought of primarily as a space built for people, but an ecosystem in which human and non-human interact in complex and often unpredictable ways.</li>
          <li>The seamless normalisation of chatbots in everyday life will intensify cloud-based surveillance by their providers at ever more granular levels.</li>
          <li>Chatbots might not be so smart but many people are lonely. New chatbots will be playful, entertaining, and personal, consolidating emergent markets in artificial companions, therapists and lovers.</li>
          <li>Changes will disproportionately affect people on lower incomes on multiple fronts, as both providers and consumers of care.</li>
        </div>      

        <div className="chapter"> 
          <h3>An Introduction for the Bot Curious</h3>
          
          <p>Chatbots have been around for almost as long as computers. Bot or not is a kind of "Turing test", named after the computer scientist Alan Turing, who planted the seed of the modern chatbot in 1950. </p>
          <p>Turing asked a simple question: can machines think? Or, to put it more mundanely, could a machine convince a human, through conversation, that it was actually human? </p>
          <p>Seventy years later, the implications of Turing's "imitation game" are more than philosophical speculation. Looking at today's technologies, it seems clear that these autonomous, artificial conversational agents, or chatbots, are here to stay. Primitive chatbots are everywhere, from Russian bots on Twitter to "smart" voice assistants like Siri and Alexa, to therapy bots who respond to our most intimate thoughts by text. Not all of these bots are designed to deceive users into thinking they're human, but many of them are designed to imitate human-like behaviour, to great effect. </p>
          <p>As language and speech processing technologies improve, many chatbots are already integrating seamlessly into previously human roles, at times interacting with other people on our behalf. Today, when so much information appears to us as a headline, a text or a tweet, it's easy (and often convenient) for algorithms to enter the flow of human communication. Whether they are transparent or deceptive, chatbots exert an increasing amount of agency in our mediated world. </p>

          <h4>Why does it matter?</h4>

          <p>Some <a href="https://www.gartner.com/smarterwithgartner/gartner-predicts-a-virtual-world-of-exponential-change/">industry reports</a> predict that "by 2020, the average person will have more conversations with bots than with their spouse". The proliferation of chatbots in the spheres of work, customer service, social media and domestic life over the past decade suggest that, like many technologies, we will learn to live with them long before we have truly understood their societal effects.</p>
          <p>These bots will have far-reaching implications for everything from workforce automation to US First Amendment rights to the integrity of democratic elections. What's more, as chatbots become increasingly human-like, we too begin to question the terms of our own humanness in exciting, revealing and troubling ways. </p>

          <h4>Spotting Bots</h4>

          <p>Is its syntax repetitive or formulaic? The majority of bots, like ours, are fundamentally quite limited when it comes to constructing sentences of their own, relying instead on prompting the user to engage the flow of conversation. If you suspect it's a bot, trying giving it some unpredictable inputs and see how it responds. Even the most advanced chatbots today have a hard time responding to highly contextual questions that humans would have no problems with, like a reference back to something you discussed earlier, sarcasm or a joke. </p>
          <p>Is it trying to make you do something, like give up information, or provoke you to give it attention? Some of the most common bots just seek to add to the noise of misinformation, like Twitter bots. Scammer bots on dating apps are also a known phenomenon, while increasingly realistic voice bots like Google Duplex suggest that new kinds of phone scams could increase too.</p>
        </div>      

        <div className="chapter"> 
          <h3>Passive Surveillance</h3>
          <div className='subtitle'>As chatbots blend seamlessly into our daily interactions with technology and each other, we will normalise even more powerful forms of surveillance over our lives by corporations.</div>

          <h4>Their Interfaces Want Us to Forget Them</h4>
          
          <p>Chatbots often ask us to treat them as if they are people. Expressions like "OK Google" or "Hey Siri!" seek to weave these "virtual assistants" seamlessly into our everyday lives, while simultaneously collecting our data and logging our every interaction onto the cloud. The more "natural" our interactions with chatbots become, the more they will become an invisible part of our lives.</p>
          <p>On the face of it, this may not be a problem. Virtual assistants can help make many daily tasks more frictionless, particularly for <a href="https://www.mic.com/articles/180369/as-a-disabled-person-siri-changed-my-life-then-i-lost-the-ability-to-speak" >those with disabilities</a> that limit mobility like chronic fatigue. Looking further into the future, more automated human-like chatbots might even acquire a different status in society from our other technologies, including the partial rights to free speech, reflecting the responsibilities that come with the intimate role they play in our lives.</p>

          <h4>Between the Corporate Cloud and the Surveillance State</h4>

          <p>However, the increasing presence of bots in the personal and domestic sphere presents a massive risk to privacy, so long as personal data redivs the primary business model for major tech platforms. Big tech knows that in order to get the most data out of our daily lives, they need us to invite bots into our homes, and to enjoy ourselves while we do so.</p>
          <p>For example, "smart speakers" are actually more like "always-on" listening devices, forever surveilling our homes. Kate Crawford and Sharelab have shown in detail how every utterance directed to an Amazon Echo travels from a kitchen table to Amazon's cloud and back again. When you talk to Alexa, you're really talking to a computer in Oregon, or Virginia.</p>
          <p>With government regulation struggling to keep up with new technologies, there is little public awareness or legal resistance to stop companies like Amazon developing a global surveillance network on an unprecedented scale — which is exactly what it has done, with over 100 million Echo devices sold to date. Governments are not only lagging behind on policy, they are also part of the problem. As the <a href="https://theconversation.com/amazon-echos-privacy-issues-go-way-beyond-voice-recordings-130016">Conversation</a> reported earlier this year, Amazon has a history of willingly <a href="https://www.vox.com/the-goods/2018/11/12/18089090/amazon-echo-alexa-smart-speaker-privacy-data">handing citizens' private data over to police</a> without consent, including camera footage from Alexa and Ring doorbell devices.</p>
          <p>As chatbots slide seamlessly into our personal and domestic lives, it has never been more important to demand transparency from companies and policy initiative from regulators.</p>
        </div>

        <div className="chapter"> 
          <h3>Is Disclosure Enough</h3>
          <div className='subtitle'>In the hands of big platforms, chatbots with realistically human-like voices are openly manipulative attempts to gather our data and influence our behaviours.</div>
          
          <h4>Non-disclosure and the Duplicity of Google Duplex</h4>
          
          <p>In the last few years, both Google and Microsoft have released advanced "duplex" chatbots, so-called because they can speak and listen at the same time, closely mimicking the experience of human conversation. After revealing Google Duplex in 2019, the tech giant faced a sharp backlash over the question of consent, for failing to disclose that the person on the other end of the line – in this case a hairdresser receiving a customer booking – that they were speaking to a bot. As the sociologist of technology Zeynep Tufecki <a href="https://twitter.com/zeynep/status/994233568359575552?ref_src=twsrc%5Etfw">responded</a> at the time, echoing sentiments across social media:
          Google Assistant making calls pretending to be human not only without disclosing that it's a bot, but adding "ummm" and "aaah" to deceive the human on the other end with the room cheering it... horrifying. Silicon Valley is ethically lost, rudderless and has not learned a thing.</p>

          <h4>Who Do You Think You're Talking To?</h4>

          <p>Although Google later added a disclosure feature to Duplex's interaction, its bot raises ethical problems that can't be solved by a warning label. Like "deepfakes", realistic computer-generated videos of real people, the popularisation of human-like voice chatbots is ripe for entirely new forms of deception and abuse, especially for those who are already highly vulnerable to bot-based scams, such as the elderly. Is it possible to ensure that a person speaking to an AI consents to do so, and even then, is it fair to expect human service workers to treat an AI with the same emotional labour as they would for a human client?</p>

          <h4>Deception is a Feature, Not a Bug</h4>

          <p>There is a fundamental contradiction in human-like service bots. On one hand, legally and ethically, they need to disclose their artificiality; on the other, they are designed to deceive users into thinking, and acting, as if they were also humans. Duplex stunned audiences because its "um"s and "ah"s mimic the affect and agency of a fellow human being.</p>
          <p>For companies, this represents a deep conflict between the interest between transparency and duplicity in the pursuit of profit. A recent <a href="https://pubsonline.informs.org/doi/10.1287/mksc.2019.1192">research paper</a> suggested that undisclosed chatbots are four times as efficient as inexperienced workers in making sales, while making a disclosure before conversation reduced the purchase rate by almost 80%. In short, customers engage dramatically less when they know that they're speaking to a bot than when they don't. Furthermore, disclosure hurts sales because users find chatbots less knowledgeable and empathetic.</p>
          <p>Put simply, people make emotional connections and give one another the benefit of the doubt, even if it's just a stranger over the phone – which is precisely the emotional response that Duplex and others seek to exploit. The researchers conclude by recommending to disclose the chatbot after the conversation, in order to reap maximum benefits of duplicity while rediving within the law.</p>
        </div>      

        <div className="chapter"> 
          <h3>Performing Your Humanity</h3>
          <div className='subtitle'>As chatbots become more common throughout domestic and social life, individuals will be subject to systems that ask them to satisfy normative standards of behaviour.</div>
          
          <h4>Picture this scenario.</h4>
          
          <p>Congratulations, you just got a response for an application to a new job! They want you for an interview, so you spend a whole week preparing for a scheduled call with the employer. As it turns out, you're not being interviewed by a human, but a chatbot. The automated character asking questions on the other side of the screen is polite and clear, and so are your answers. There's a problem, though, you speak English with an accent, and the chatbot keeps asking you to repeat what yourself. After repeating every answer multiple times, the interviews ends, leaving you confused and exasperated. Later that week, you're told that you've not made it to the next round. Throughout this whole process, you've not communicated with a single human being at the company.</p>

          <h4>This is not a speculative situation.</h4>
          
          <p>Today, more and more companies are using chatbots to screen and recruit candidates. A service called <a href="https://www.hirevue.com/">Hirevue</a>, for instance, records and analyses everything from the interviewees intonation to their facial movements in order to determine whether they resemble the "ideal candidate". The company claims it can identify characteristics like "creative thought" by analysing behavioural cues.</p>
          <p>The state of Illinois recently passed the <a href="http://www.ilga.gov/legislation/BillStatus.asp?DocNum=2557&GAID=15&DocTypeID=HB&LegID=118664&SessionID=108&SpecSess=&Session=&GA=101">Artificial Intelligence Video Interview Act</a>, the first of its kind, under which employers must obtain consent from candidates before submitting their interviews to AI analysis. This is a step in the right direction for privacy, but it may not be enough.</p>
          <p>Of course, automation makes sense from the corporation's point of view. Employers have to deal with the complex relations of humans, labour and society, when they'd much rather be dealing with exchangeable units of efficient, value-producing workers. What gets left out of this equation is the voice and agency of the workers themselves.</p>
          <p>The automation of recruitment is much more likely to affect workers who are already low-paid and precarious. Companies are unlikely to hire senior managers by chatbot, but if a company is looking to fill, say, a hundred customer service positions, an automated agent would enable it to process thousands of candidates for a certain "ideal" of appearance or diction.</p>
        </div>      

        <div className="chapter"> 
          <h3>Artificial Beings and the Law</h3>
          <div className='subtitle'>A world of chatbots forces us to ask questions that are both practical and philosophical because they challenge the idea of personhood in today's mediated technological environments.</div>
          
          <h4>On the Internet, No-one Knows You’re a Bot, Really.</h4>
          
          <p>The idea humans have freedom of expression is complicated when we don't know whether the "speaker" is in fact human. This issue was contested recently, when the State of California passed the <a href="https://www.natlawreview.com/article/california-s-bot-disclosure-law-sb-1001-now-effect">world’s first law on chatbots</a>, which declared it "unlawful for any person to use a bot [...] with the intent to mislead the other person about its artificial identity."</p>
          <p>At first sight, the intentions of the "bot law" seemed fair enough, but things get much messier in practice. As the digital liberties advocacy organisation, the <a href="https://www.notion.so/Bot-Law-21ebc15918c342a2af2d0df2ffe9dc21">Electronic Frontier Foundation pointed out</a>, the law would cover all "bots" on the web, even harmless, playful, or creative ones, thereby violating the rights of free expression of their makers. The "artificial identity" of a poetic twitter bot, for instance, might be central to its art.</p>
          <p>Furthermore, on the internet, no-one knows whether you're a bot, a dog or a person. One only has to think of the armies of Russian propaganda "bots", many of whom are in fact <a href="https://en.wikipedia.org/wiki/Russian_web_brigades">humans paid to troll by the Kremlin</a>. Similarly, a recent investigation found that a third of Google Duplex's phonecalls were actually made by <a href="https://www.nytimes.com/2019/05/22/technology/personaltech/ai-google-duplex.html">Google's human employees</a>, who step when the AI fails.</p>
          <p>The internet has long been a place where people have been able to express themselves and cultivate alternative and multiple identities quite distinct from those in the "real world". As the EFF pointed out, the "bot law" appears largely unenforceable, and could actually be used to unmask those who need anonymity, like whistleblowers. Making "artificial identity" on the web illegal would be near-impossible, and far beyond the task of countering malicious bots. And yet, in the world of digital platforms it's difficult to say that any identity is more real than any other.</p>

          <h4>If Corporations are People, Why Not Bots?</h4>
          
          <p>The question of telling bots and people apart has actually caused considerable headache for lawyers, because there is simply no neat way for bots to fit into the current legal understanding of a “person”. In the US, for example, a child is not protected by the First Amendment, but a corporation is, because a corporation is considered to be an "artificial being" that makes choices in "skilled and expressive ways", while a child is only a part-person, not fully responsible for its actions.</p>
          <p>If corporations can "speak" with the same rights as people, why not an automated conversational agents? The trouble hinges on the fact that the law can't tell if a chatbot is a creative work expressed in code, or an agent divorced from its maker, which is capable of forming its own "expressions".</p>
          <p>Why does it matter? Well, first amendment protections would mean that the makers of bots, like Google, Amazon and countless others, could not be held responsible for the consequences of their creations, even if those bots act maliciously in the world. All the same, as we've seen above, insisting that expressions made by “bots” are strictly the speech of their creators comes wrapped up in its own complications, especially when humans are conversing daily with bots as friends, <a href="https://www.wired.com/2017/06/facebook-messenger-woebot-chatbot-therapist/">therapists</a>, or even <a href="https://www.wsj.com/articles/my-girlfriend-is-a-chatbot-11586523208">lovers</a>.</p>
          <p>To muddy the waters even further, when does an "assistant" bot like an Amazon Alexa stop being a tool and take on an agency of its own? A 2017 murder investigation broke new legal territory when the police issued a warrant for the voice recordings of the suspect's Alexa. In response, Amazon claimed that Alexa's data was in fact part of Amazon's protected speech. If that were the case, are Alexa owners in fact consenting to communicate with Amazon every time they speak in the presence of their domestic bot? Others have even <a href="https://slate.com/technology/2017/03/does-amazons-alexa-have-">argued that</a>, were Alexa a "stronger", less constrained AI, it may in fact enjoy First Amendment protections of its outwith Amazon’s claims.</p>
        </div>

      </main>
    </div>
  );
}

export default App;
