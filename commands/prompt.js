exports.run = async (client, message) => {

  let arr1 = ["What harsh truths do you prefer to ignore?", "Is free will real or just an illusion?", "Is there a meaning to life? If so, what is it?", "Is the meaning of life the same for animals and humans?", "Where is the line between art and not art?", "If someone you loved was killed in front of you, but someone created a copy of them that was perfect right down to the atomic level, would they be the same person and would you love them just as much?", "Does fate exist? If so, do we have free will?", "What does it mean to live a good life?", "Why do we dream?", "Is it possible to live a normal life and not ever tell a lie?", "Does a person’s name influence the person they become?", "At what point is a technologically enhanced human not a human anymore?", "Does the modern age make global conspiracies more or less feasible?", "Is technological advancement a net positive or a net negative?", "Is technological progress inevitable as long as humans exist or can it be stopped?", "Is true artificial intelligence possible with our current technology and methods of programming?", "What scientific breakthrough would have the biggest effect on humanity?", "Why did technology progress more slowly in the past than it does now?", "Will we keep leaping to even greater technological and scientific breakthroughs that radically change society, or will the rate of progress slow and humanity’s progress be limited to incremental improvements?", "If a robust and cheap genetic engineering industry existed, would you have your genes edited? If so, what genetic changes would you choose to make? If not, why not?", "Assume that in the future there will be huge leaps in human augmentation. Given a scale from completely human to completely machine, how far would you choose to augment yourself with robotics? What parts would you augment and why?", "If the transporters in Star Trek existed and you used it, your particles would be disassembled and then reassembled, do you die every single time? Are you ever alive at two places at once? Are you ever completely dead?", "Should full access to the internet be a fundamental human right?", "Has the invention of the atomic bomb made the world a more peaceful place?", "Do you think a technological singularity will occur? If so, what time frame do you think it will happen in?", "If emotions are the product of biochemical reactions, then in the future we will be theoretically able to control them. If we could control emotions through technology, should we?", "Is there a limit to what humans can create through technology and science?", "Considering that the technology exists to enable a real democracy, would a true democracy (every single person can vote on every single legislation) be advantageous or detrimental?", "If everyone said what they were actually thinking, what would happen to society?", "What are the benefits and drawbacks of diversity in society?", "Under our government are there any rights that you have but shouldn’t? How about rights you don’t have but should?", "What is the most important right our government allows for?", "Has social media been a net positive or a net negative for our society? Why?", "How would society change if men were able to get pregnant and men and women both had an equal chance of getting pregnant?", "Why have many societies begun to place such a high value on emotions and being emotional?", "Is it right or wrong that everyone seems to be accustomed to the fact that all of humanity and most of the life on Earth could be wiped out at the whim of a handful of people?", "In an ideal government, what should a good citizen provide to their government and what should that government provide that good citizen?", "Should tax payers have the option to explicitly say what they don’t want their tax dollars spent on?", "Can a society exist without laws?", "Will humanity ever be able to escape tribalism and the creation of in and out groups? Should it?", "How much privacy are you willing to sacrifice for safety?", "How would the world change if there was an accurate measure of aptitude?", "Is hierarchy necessary for all successful human communities?", "Is some degree of censorship necessary?", "What are the biggest moral dilemmas your country is facing now?", "Was the agricultural revolution and the explosion of civilizations that came from it an overall good thing for humans or a negative? In other words, would it have been better or worse for people to stay in small tribes?", "What will be/are some of the by-products to society of everyone having the ability to take pictures or a video at any time?", "Does marriage as an institution need to be updated or is it fine how it is?", "If you were given the ability to reform how your country’s leaders were chosen and how they serve, what would you change?", "What should the role of a government be, what boundaries and limitations should it have?", "Is poverty in society inevitable?", "How should we measure the productivity of a society?", "What would a utopia be like, how would it function and continue to exist?", "Do you think there will ever be a global government? If a world government did come to power, assuming it wasn’t particularly cruel or evil, would it be a good or bad thing?", "What is the biggest threat to the social contract in our country?", "Is it more or less difficult to be successful in the modern world than it was in the past (10, 50, 100, or 1,000 years ago)?", "Could societies exist without a way to transfer value (i.e. without money or a barter system)?", "What would happen if a maximum income of was implemented?", "What will the economy of wealthy countries look like in 50 to 100 years?", "What do you think the long-term effects of so many people being glued to their screens will be?", "If all humans want the same basic things, why is there so much violence and strife between people?", "Is the human tendency to create groups an overall positive or a negative trait in terms of general human flourishing?", "What would happen to a society in which no one had to work, and everyone was provided enough food/water/shelter/healthcare for free?", "Is the cultural trend of individualism and the rejection of collectivism a beneficial or detrimental trend?", "If you could start a country from scratch, what would it be like?", "Would a government run with algorithms, A.I., and statistics be better or worse than the government we have now?", "Would the world be a better or worse place if everyone looked the same?", "What causes the most harm in the world, but is completely avoidable?", "How far should governments go to prevent its citizens from causing harm to themselves?", "Do people in wealthier countries have a moral obligation to help those in poorer countries?", "When, if ever, is taking a human life justified?", "Can animals have morals?", "Without religion would people become more, less, or be equally morally corrupt?", "If humanity was put on trial by an advanced race of aliens, how would you defend humanity and argue for its continued existence?", "What rights does every human have? Do those rights change based on age?", "Do animals have rights and do those rights extend to all animals or do the rights change based on the complexity of the animal?", "Is justice a human construct or is it independent of humans?", "Why do people expect a universe full of randomness to be fair?", "With no laws or rules to influence your behavior, how do you think you would behave?", "What’s the difference between justice and revenge?", "If it was discovered that personality traits were partly genetic and could be removed with gene therapy, would it be ethical to edit out negative character traits that harm others like extreme aggression, compulsive lying, or cruelty?", "If you could press a button and receive a million dollars, but one stranger would die, would you press the button? And if so, how many times?", "What would be the most ethical way to give away five million dollars?", "Are people ethically obligated to improve themselves?", "Is privacy a right?", "At what point is overthrowing a government ethical, considering all the violence a revolution usually entails?", "Can morality ever be objective or is it always subjective? If it can be objective, in what instances? If it’s always subjective, how do we decide whose concept of morality is correct?", "Are intentions or outcomes more important when judging whether actions are moral?", "Should there be limitations on the right to free speech?", "If it was discovered that most animals were conscious of their existence and eventual death, what would be the ramifications of that discovery?", "Should euthanasia be legal? Why or why not?", "If scientists could accurately predict who was more likely to commit crimes, what should society do with that information?", "Do business owners have the right to refuse service to customers?", "If babies are considered innocent, when do people cease to be innocent?", "Why do humans often associate beauty with morality?", "If you can save another’s life and don’t because doing so would break the law, are you ethically justified in your decision?", "Are all individuals morally obligated to save another person’s life if they are able? What if that person lives in another country?", "Is it just and right to deny entry to a country when doing so probably means death for the immigrant and their family?", "Should we terraform planets if it means that we may be destroying undiscovered microscopic alien life?", "Does anonymity encourage people to misbehave or does it reveal how people would choose to act all the time if they could?", "What is the most fertile soil for hatred? Fear, ignorance, jealousy, or something else entirely? Is it possible that some people are genetically predisposed to hatred?", "If doing something good for others makes us feel good, can there ever be such a thing as pure altruism?", "What is your definition of evil?", "Do all people have equal value regardless of their actions or is a person’s value based on their actions?", "Why are humans so fascinated by mass murderers if their actions are universally considered evil and vile?", "As people, we feel our moral obligation weaken with physical as well as emotional distance from individuals in need. For example, you’re more likely to help someone dying of hunger at your feet than someone dying of hunger in another country. How does this human trait of morality dependent on distance shape our world?", "If I steal a loaf of bread from you and eat it, when does the bread itself cease to be yours and becomes mine?", "How much effort should an individual put into not offending others?", "Is happiness just chemicals flowing through your brain or something more?", "Why are humans so susceptible to magical thinking?", "If every neuron in a human was accurately simulated in a computer, would it result in human consciousness?", "Is it possible that some animals are self-aware and think about their ability to think?", "How do you define consciousness?", "Is it possible to prove that other people besides yourself have consciousness?", "How conscious do you think animals are?", "Assuming evolution is correct, do you think that if humans went extinct another species as intelligent as humans would evolve? If life exists long enough on a planet, is intelligence and consciousness inevitable?", "Would it be more frightening to discover that humans are the most advanced species in the universe or that we are far from being the most advanced species in the universe?", "How would you define genius?", "There is zero chance that ALL your firmly and dearly held beliefs are true. So, which of your beliefs are most likely to be wrong and which are most liable to be true?", "How much does language affect our thinking?", "Why are humans so confident in beliefs that can’t be proven?"]; 
  
  let arr2 = ["If all your memories were erased, what kind of person would you be?", "Why do humans have such a strong urge to distract ourselves from the real world?", "What is the benefit of consciousness from an evolutionary stand point?", "Is the concept of “you” continuous or does past “you” continually fade into present and future “you”? In other words, what part of “you” sticks around over time considering that the atoms that make up your body are constantly being replaced and your memories are always changing?", "Is it possible that someone’s genes might affect their political leanings? If no, why not? If so, what would be the ramifications?", "Can rational thought exist without language?", "Would selectively breeding an animal such as a dog based on intelligence, increase its intelligence over time? If so, how intelligent could dogs become? If not, how does intelligence emerge in a species?", "Are there limits to human creativity?", "Why do we resist doing things that we know are good for our well-being while craving things that are detrimental to our well-being?", "Is it be possible for humans to create something completely novel and new that is based on nothing that previously existed? Or is human creativity just rearranging and building on previous ideas?", "If there existed a perfect clone of you, would it also be you? Would it act in exactly the same manner as you (like a mirror) or would it act differently? If it acted differently then would it still be you? At what point would it not be you?", "Would you be able to tell if time had been altered in some way?", "Your perception of the world is just what your brain constructs for you from the signals sent by your senses. Plus, there is a slight delay, so you aren’t even experiencing the simulation in real time. What would it be like if humans could perceive what the world is actually like and do it in real time? Also, what are the ramifications of every single person’s reality being a little different and unique to them?", "If language influences how we perceive color, what other things could languages be changing our perception of?", "Is a sense of humor a byproduct of consciousness or something else entirely?", "Are intelligence and happiness tied together in any way? If you are highly intelligent, is it more likely that you’ll be more, or less happy?", "Human memory has been shown to be incredibly unreliable. With that in mind, how do you know which of your memories are genuine and which have been altered or made up?", "Different people and different organisms perceive reality in vastly different ways. With that in mind, what is real and what is just our perception of reality? Or does every organism live in its own personal reality?", "What should be the goal of humanity?", "If you could become immortal on the condition you would NEVER be able to die or kill yourself, would you choose immortality?", "How will humans as a species go extinct?", "What actions in your life will have the longest reaching consequences? How long will those effects be felt?", "If a child somehow survived and grew up in the wilderness without any human contact, how “human” would they be without the influence of society and culture?", "Where does your self-worth come from?", "How would humanity change if all humans’ life expectancy was significantly increased (let’s say to around 500 years)?", "Where do you find meaning in your life?", "What do you think would be humanity’s reaction to the discovery of extraterrestrial life?", "Will religion ever become obsolete?", "If you could teach everyone in the world one concept, what concept would have the biggest positive impact on humanity?", "Is suffering a necessary part of the human condition? What would people who never suffered be like?", "Does hardship make a person stronger? If so, under what conditions and at what point is it too much hardship? If not, what makes a person stronger?", "Would things get better or worse if humans focused on what was going well rather than what’s going wrong?", "What benefits does art provide society? Does art hurt society in any way?", "How likely do you think it will be that humans will last another 1,000 years without killing ourselves off?", "What do you attribute the biggest successes in your life to? How about your largest failures?", "If freedom is simply being able to do what you want, are animals freer than humans?", "Would you want to know you are going to die before hand or die suddenly without warning?", "Is humanity headed in the right or wrong direction?", "Does the study of philosophy ever lead to answers or simply more questions?", "What is the best way for a person to attain happiness?", "Is it better for a person to have a broad knowledge base or a deep knowledge base?", "What is the best way to train people to see the gradients in the world around them instead of just a simplistic “this is good, that is wrong” view of the world?", "Is intelligence or wisdom more useful?", "Which of your beliefs are justified and which ones aren’t?", "What do you contribute back to society?", "Assuming there is no afterlife, what will you do with the one life you have?", "Is it more important to help yourself, help your family, help your society, or help the world?", "What life-altering things should every human ideally get to experience at least once in their lives?", "What is the most important goal every person should have?", "Is it better to be a big fish in a small pond or a small fish in a big pond?", "What are you capable of achieving?", "By what standards do you judge yourself?", "Can human nature be changed? Should it be changed?", "How replaceable are you?", "Why don’t we as a species take more advantage of the fact that we have almost infinite knowledge available to us?", "What two questions would you ask to get the most information about who a person truly is?", "Some people believe that if life has no purpose, then there is no reason for living. While others think that if life has no purpose, that frees a person to find/create and follow their own personal purpose. Which is a more valid point of view or are they both equally valid?", "Does absolute power corrupt absolutely?", "Why do we judge ourselves by our intentions but judge others by their actions?", "What activities cause you to feel like you are living life to the fullest?", "Does knowledge have intrinsic value or does it need to have a practical use to have value?", "What would you genetically change about humans to make them a better species?", "How important is play in living a healthy and fulfilling life?", "Where do you think is the most worthwhile place to find meaning in life? Work, family, hobby, religion, philosophy, helping others, all the small miracles, or something else entirely?", "What is the biggest waste of human potential?", "Is a life that focuses on avoiding pain and seeking out pleasure a good and worthwhile life? Why or why not?", "Does jealously have value in driving humans to improve themselves or is it a purely negative emotion?", "What percentage of your life do you feel truly alive? When do you feel that way? How can you feel that way more often?", "What do you think your future self will remember about you now?", "“Know thyself” is an ancient concept going back much further than Socrates and is at the root of much of philosophy. With that in mind, what are the most important things to learn about one’s self or is all self-knowledge equal?", "What do you think existed before the universe was created?", "Is math something that humans created or something we discovered? Is looking at reality mathematically an accurate representation of how things work?", "Is it possible for a human to fathom the true depths of reality and existence?", "If the universe is finite, what would beyond the edge of the universe be like?", "What is the best path to find truth; science, math, art, philosophy, or something else?", "As more and more is being discovered about quantum physics, we become less and less able to comprehend the nature of reality. Is this something temporary and our minds will adapt and begin to understand this new reality or is it possible that the human mind will soon reach its limits of comprehension? If it’s only temporary, is there is a limit to what the human mind can comprehend? If we are reaching our limits, how do we continue to study our reality?", "Is there inherent order in nature or is it all chaos and chance?", "What in life is truly objective and not subjective?", "There has always been something. Before there was something, there was only nothing. Which do you think is more likely?"];

  let arr3 = ["How would you react if there was irrefutable proof that God doesn’t exist? How about if there was irrefutable proof that God does exist?", "Is human nature constant or is it molded by culture? Can human nature be completely changed by culture or society?", "Are humans better at creation or destruction?", "What are the best and worst parts of human nature?", "If pressing a button meant you received 5 million dollars but it also killed 5 people somewhere in the world, would you press it? What if it killed only 1 person or killed 20 people? What if the people were people you knew?", "If you had to sum up the whole human species in 3 words, what would those words be?", "What aspects of humans have made us a successful species?", "Is what we perceive reality or just a construct of our minds? Can our minds correctly interpret reality or is reality subjective?", "What is the best way to explore human nature: psychology, philosophy, or biology?", "Is tribalism and people separating themselves into “us” and “them” groups, a learned or genetic trait? Can it be overcome? If so, how?", "How does tribalism and creating in groups and out groups (e.g. race, religion, sport team fans, people with a hobby, etc.) help and hurt society?", "What makes people believe absurd conspiracy theories?", "What’s something terrifying that we’ve all come to accept as a fact of life?", "Should governments make laws to protect people from hurting themselves?", "What is the most uplifting thing happening in the world right now? What is the most tragic thing?", "What does honor mean to you? How important is it to you? Does your culture value honor? What exemplifies honor in your culture?", "How important are morals in a healthy society? What are the most important morals for citizens to have?", "In the distant past, a person’s life was very similar to their grandparents’ and grandchildren’s lives. How has the rapid pace of technological advancement changed society?", "What is a miracle that happens every day?", "How important is freedom of the press to a healthy society?", "What are the most important factors in maintaining a well functioning society? What does it mean for a society to function well?", "Should the government be involved in making laws to regulate moral behavior? If so, to what extent?", "With the invention of the internet and the advent of big data and crowd sourcing, it’s finally possible for citizens to govern themselves directly. Is it a good idea for the masses to directly govern themselves or is governance something better left to professional politicians?", "What is the purpose of art in society?", "Do people have an obligation to help others or should people be responsible for helping themselves?", "Can people with vastly different cultural backgrounds live together peacefully? How?", "What would be different if the 9/11 terrorist attack never occurred?", "What would a perfect city be like?", "What is a year of life worth? How about a day?", "What is the purpose of a human life?", "If sacrificing your own life would save the lives of a specific number of strangers, how many strangers would need to be saved for you to sacrifice your own life? What if the people were friends? How about family?", "Are some lives more valuable than others?", "What does the ideal life look like?", "What does it mean to die well?", "Who do you know who is living life to the fullest?", "If you were given an envelope with the the time and date of your death inside, would you open it?", "If you died today, what regrets would you have about your life?", "Is taking a life ever justified? If so, where is the line? When is a person’s life considered forfeit?", "What do you think about the singularity? The idea that eventually artificial intelligence will advance to the point where computers are more intelligent than humans.", "What are the pros and cons of colonizing other planets? How could this help or hurt the human race?", "What is most likely to bring about the extinction of the human race? How can it be avoided?", "Will humans as a species ever be able to work together as a whole to achieve a goal? What is holding humans back from working together on a global scale?", "Will humanity continue to advance technologically or will we fall back to how we lived for thousands of years or fall back further to how we lived for a hundred thousand years ago?", "What would be the best possible scenario for how the world will develop in the next 25 years? What do we need to do to get there?", "Do animals experience emotions? If so, do they experience emotions in the same way humans do? If not, how do they experience the world and what dictates their behavior?", "How are emotions useful for humans and the human race?", "Are emotions necessary for human survival? Why or why not?", "What is the most beneficial emotion? How about the most destructive?", "Do people have a right to be happy or should they have to earn it?", "Do you think that humans as a species have gotten better through the generations or worse? Why?", "What are some examples of small changes that can be made that really improve the lives of a country’s citizens?", "What is the most important thing a person can do to improve themselves?", "Do you think the future will be better than the present? Why?", "Do you think human morality is learned or innate?", "Do you think the present is better than 50 years ago? Why?", "How much is a human life worth and are some lives worth more than others?", "Will humans spread out among the stars or just be a brief blip in Earth’s history?", "Do you think that war is inevitable or can it be ended completely?", "What makes a person truly evil? Are they born that way or did their environment make them that way?", "Why have apocalyptic games, movies, shows, and books become so popular in the past few years? What does it say about our culture or society?", "Is there any way for governments to avoid power corrupting its politicians? If so, how? If not, what part of human nature makes corruption unavoidable?", "If science makes it possible to predict which people will be more likely to commit crimes, should the highest risk individuals be jailed or killed before they can commit crimes?", "Why are there so many people who are lonely? Why is it so hard for people to make real connections when almost everyone wants to make real connections?", "Why are people so bad at judging risks? For example: people are terrified of murders, terrorists, and flying but they are much more likely to die driving to the store.", "Why does society place such a high value on beauty when it serves no functional purpose?", "What is the most important object you own?", "If you were falsely convicted of a crime, how would you adapt to prison life?", "Which historical figure wins the award for being most hardcore?", "What issue do most people think is black and white but you think there is a lot nuance to?", "What job would you be absolutely horrible at?", "What’s the next big thing?", "What commercial convinced you NOT to buy the product they are pushing?", "What is the most useless major in college?", "What is something most people do easily but you find very difficult?", "What job doesn’t exist but should?", "What TV news story is getting more attention than it should?", "What is the most impressive thing you know how to do?"];

  let arr4= [arr1.random(),arr2.random(),arr3.random()];

  let str = `**${arr4.random()}**`;

  message.channel.send(str);
  
};


exports.help = {
  name: "prompt",
  description: "Randomly prints a discussion prompt, with over 200 prompts on tap!",
  usage: ".prompt",
  category: "Fun"
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["instadebate"],
  permLevel: "User"
};