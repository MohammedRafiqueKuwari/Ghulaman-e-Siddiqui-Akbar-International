// Huzoor.jsx
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Define topics first
const topics = [
  "Introduction",
  "Family & Lineage",
  "Early Life",
  "Education",
  "From Father to Son",
  "Global Impact",
  "Mohiuddin Trust",
  "Humanitarian Aid",
  "Educational Institutions",
  "Noor TV",
  "Countering Islamophobia",
  "Summary",
  "Scholars Honouring Shaykh ul Aalam"
];

// Define topicContent after topics
const topicContent = [
  {
    title: "Introduction",
    description: [
      "1st January 1938 – 3rd February 2017\nDarbar Aaliya Nerian Sharif, AJK\nNaqshbandiyya Siddiqui Mujaddidi\nFounder of Mohiuddin Trust, Chairman Noor TV",
      "Born in Azad Kashmir, Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui, may Allah sanctify his secret, was raised at the noble feet of the ghawth of his era, his father and Shaykh, Khwaja Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon them both. From a young age, Shaykh ul Aalam had always viewed himself first and foremost as a mureed (spiritual disciple) of his father, adorning the garment of humility and spending his early years dedicated to the way of khidmat (service). This khidmat consisted largely of serving the many visitors who flocked to Darbar Nerian Sharif daily, hoping to meet Khwaja Ghulam Mohiuddin Ghaznavi and benefit from his spiritual counsel and compassion.",
      "In this way, Shaykh ul Aalam grew up in a blessed environment, leading him to yearn for the pursuit of enlightened knowledge. Soon he would attain the esteemed rank as an ‘Aalim (scholar), yet this further increased the Shaykh in humility, sincerity and compassion, and his wisdom was sought by all. In his words and ways, the Shaykh’s deep admiration of traditional scholars and Sufiya is evident, including that of Shah Baha uddin Naqshband, Imam al Ghazali, Mawlana Jalal uddin Rumi, Shah Wali ullah Muhaddith Dehlvi, Imam Suyuti, Imam Abu Hanifa; the list is infinite. May Allah’s Mercy be upon them all. As a testament to this, Shaykh ul Aalam was awarded the Lifetime Achievement Award in 2012, at the annual Urs Mubarak of Aastana Aalia Nerian Sharif, the footage of which can be seen here.",
      "Today, the world is witness to the fact that Shaykh ul Aalam has carried the blessed legacy of his own Shaykh throughout the world. Whether on Noor TV or in another groundbreaking project beneath the umbrella of Mohiuddin Trust, the Shaykh continues to work tirelessly, wherever he may be, to provide educational or humanitarian solutions where most needed. It is truly no surprise that he is one of the world’s leading and most respected scholars, for he is a true representative of the Way of Islam and an incredibly beautiful rare embodiment of the sunnah of Sayyidina RasulAllah, may Allah’s infinite peace and blessings be upon him.",
      "One who wishes to witness the reality of the following hadith is invited to sit in the circle of Shaykh ul Aalam, Khwaja Mohammad Alauddin Siddiqui, may Allah sanctify his secret:",
      "The Messenger of Allah, may the peace and blessings of Allah be upon him, said,\n“The best of you are those who, when they are seen, Allah is remembered.” [Sunan Ibn Majah]"
    ],
    details: [
      "Founder of Mohiuddin Trust and Chairman of Noor TV, promoting education and humanitarian aid globally.",
      "Received the Lifetime Achievement Award in 2012 at the Urs Mubarak of Aastana Aalia Nerian Sharif.",
      "A spiritual disciple of his father, Khwaja Ghulam Mohiuddin Ghaznavi, embodying humility and service.",
      "Renowned for his deep admiration of traditional scholars and Sufiya, influencing his compassionate teachings.",
      "Recognized as a leading global scholar and a rare embodiment of the Prophet’s sunnah."
    ],
    
  },
  {
    title: "Family & Lineage",
    description: [
      "Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui is the second eldest son of Hudhoor Ghawth ul Ummat, Khwaja Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon him, the great wali and founder of Darbar Nerian Sharif. Shaykh ul Aalam’s mother was a pious and extremely virtuous lady, may Allah’s Mercy be upon her, who raised him with a great deal of love, affection and compassion.",
      "Shaykh ul Aalam’s paternal uncle, Khwaja Mohammad Durrab Khan (affectionately known as Pir Saani Sahib), was a qalandar saint who was deeply absorbed in the realities of the Unseen and the Love of Allah. He would accompany Shaykh ul Aalam’s father throughout their entire time at Nerian Sharif until their departure from this world. Both are buried in the blessed mausoleum of Nerian Sharif.",
      "The genealogy of Shaykh ul Aalam, via his noble father, is known to trace back to Sayyidina Khalid ibn al Waleed, the eminent Companion of the Messenger of Allah, peace and blessings of Allah be upon him.",
      "From here, it is already evident that Shaykh ul Aalam’s upbringing took place in a spiritually enriched environment; surrounded by the Men of Allah, their dhikr and their blessed mannerisms.",
      "More background on the family of Shaykh ul Aalam:",
      "» Shaykh ul Aalam has 6 brothers, of whom 2 have passed away; the eldest, Hadhrat Janab Pir Nizamuddin Qasmi Sahib and Shaykh ul Aalam’s younger brother, Hadhrat Janab Pir Imam Rabbani Farooqi Sahib – may Allah’s Mercy be upon them both.",
      "» Shaykh ul Aalam married two noble women; one from the sacred precincts of Nerian Sharif, and the other from the blessed sanctuary of Mohra Sharif who has passed away in recent years, may Allah’s Mercy be upon her. She was in fact the daughter of Khwaja Pir Mohammad Zahid Khan Sahib, who was a great Man of Allah, as well as the son and spiritual heir of Khwaja Mohammad Qasim Mohrvi Sahib, the ghawth of his era. May Allah’s Mercy be upon them all."
    ],
    details: [
      "Second eldest son of Khwaja Ghulam Mohiuddin Ghaznavi, founder of Darbar Nerian Sharif.",
      "Genealogy traces back to Sayyidina Khalid ibn al Waleed, a Companion of the Prophet (peace be upon him).",
      "Paternal uncle, Khwaja Mohammad Durrab Khan, was a qalandar saint buried at Nerian Sharif.",
      "Has six brothers, two deceased: Pir Nizamuddin Qasmi Sahib and Pir Imam Rabbani Farooqi Sahib.",
      "Married two women, one from Nerian Sharif and one from Mohra Sharif, daughter of Khwaja Pir Mohammad Zahid Khan Sahib."
    ]
  },
  {
    title: "Early Life",
    description: [
      "As a child, Shaykh ul Aalam, Khwaja Mohammad Alauddin Siddiqui, possessed a warm presence and noble character traits. To name a few, he was honest, generous, humble, deep-thinking, and would show compassion towards all living beings even as a young boy.",
      "When roughly 10 years of age, the Shaykh was very fond of cycling and would ride his bicycle through the mountainous terrains of Kashmir. It so happened that, one day, as he was cycling in this manner, and the bicycle speed gained significant momentum, he found himself facing the edge of a terrifying cliff. Due to speed, it was impossible to stop or slow down at this point. Suddenly, an unseen hand reached out and pulled the young Shaykh back, grasping him by the shoulders. Then a voice said: “O Alauddin, you were made for better things than this!” Shaken by this experience with the Rijal al Ghayb (Unseen Man), the young Shaykh immediately hurried home to the safety of his father and spiritual guide, Khwaja Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon him."
    ],
    details: [
      "Displayed noble traits like honesty, generosity, humility, and compassion from a young age.",
      "At around 10 years old, enjoyed cycling through Kashmir’s mountainous terrains.",
      "Experienced a miraculous intervention by an unseen hand, saving him from a cliff while cycling.",
      "Guided by his father, Khwaja Ghulam Mohiuddin Ghaznavi, after a profound spiritual encounter."
    ],
   
  },
  
    {
      title: "Education",
      description: [
        "Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui studied his early Islamic education in the presence of his father, Khwaja Shaykh Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon him.",
        "Later, he studied Mishkat Sharif and Jalalayn in Jamia Haqqa’iq al Uloom in Hazro. After this, Shaykh ul Aalam completed his studies of kutub in Jamia Rizviyya, Faisabalad under the supervision of the highly respected Muhaddith-e-Aazam Pakistan, Shaykh ul Hadith, Hadhrat Mawlana Sardar Ahmad Sah ASEB, may Allah’s Mercy be upon him. He then studied Tafsir-ul-Qur’an with Shaykh ul Qur’an, Hadhrat Allamah Abdul Ghafur Hazarvi, may Allah’s Mercy be upon him.",
        "After completion, Khwaja Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon him, bestowed Shaykh ul Aalam with khilafat and sent him to propagate Islam."
      ],
      details: [
        "Received early Islamic education from his father, Khwaja Ghulam Mohiuddin Ghaznavi.",
        "Studied Mishkat Sharif and Jalalayn at Jamia Haqqa’iq al Uloom in Hazro.",
        "Completed kutub studies at Jamia Rizviyya, Faisalabad, under Mawlana Sardar Ahmad Sahib.",
        "Studied Tafsir-ul-Qur’an with Allamah Abdul Ghafur Hazarvi.",
        "Received khilafat from his father and was sent to propagate Islam."
      ],
    },
    {
      title: "From Father to Son",
      description: [
        "In 1974, Shaykh ul Aalam’s father, may Allah’s Mercy be upon him, became fatally ill. Khwaja Shaykh Ghulam Mohiuddin Ghaznavi had dedicated his entire life to serving the Way of Allah & His Messenger, may Allah’s peace and blessings be upon him. In fact, from his early 20’s until he departed from this world, he remained at the sanctuary of Darbar Nerian Sharif where he and his brother spent day and night strengthening the people’s love for Allah, counselling them and inviting them to righteousness. Thus, his entire life was dedicated to the Way of Islam.",
        "Shaykh ul Aalam Khwaja Alauddin Siddiqui was 36 years of age when his father passed away, and had been propagating Islam in England. He immediately returned to Kashmir upon hearing about the deteriorating health of his father and murshid. All the sahibzadagaan (sons and successors) and murideen (followers) agreed unanimously that Shaykh ul Aalam was to be the main successor of Khwaja Ghulam Mohiuddin Ghaznavi and the inheritor of his role (sajjada nasheen).",
        "As a result of this life-changing turn of events, all of Shaykh ul Aalam’s projects in England were put on hold. For the foreseeable future, he was to remain in Pakistan to oversee the spiritual mission of Nerian Sharif, which was of the utmost importance especially at such a crucial and sensitive time. The people in Europe felt his absence, for the Shaykh is a man of immense seen and Unseen qualities. His incredible dedication, extraordinary personality and eloquent speech ensured that a special place was reserved deeply for him in every heart.",
        "By the Grace of Allah, without doubt, Shaykh ul Aalam is a perfect example of the term, “A great son of a great father”. Khwaja Ghulam Mohiuddin Ghaznavi was a truly noble and kind-hearted man, famous for his generous spirit and love towards all for the Sake of Allah. This character is reflected perfectly in his beloved son who – with his way of love, kindness, gentle counsel and warm affectionate hospitality – has inspired and uplifted hundreds of thousands of hearts all over the world, from countless backgrounds, purely to strengthen their personal bond with Allah & His Messenger, may Allah’s peace and blessings be upon him.",
        "In this way, Khwaja Ghulam Mohiuddin Ghaznavi’s propagation of Islam and spiritual mission, as well as the honour and status of Darbar Nerian Sharif, has been greatly elevated. In the famous words of Khwaja Qasim Mohrvi to his khalifa, Khwaja Ghaznavi: “Go, my son! By Allah’s Grace and Generosity, your store will attract customers from East and West.”"
      ],
      details: [
        "Became the main successor (sajjada nasheen) of his father, Khwaja Ghulam Mohiuddin Ghaznavi, in 1974.",
        "Returned from England to Kashmir at age 36 to lead Nerian Sharif after his father’s passing.",
        "Paused projects in England to focus on the spiritual mission of Nerian Sharif.",
        "Reflects his father’s noble qualities, inspiring thousands globally with love and kindness.",
        "Elevated the legacy of Darbar Nerian Sharif, fulfilling his father’s mission to propagate Islam."
      ],
    },
    {
      title: "Global Impact",
      description: [
        "Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui’s tireless efforts to promote the true Way of Islam have been ongoing to this day, with significant impact. It was with this intention that the Shaykh first traveled to the UK in the early 70’s, where he quickly became established. He soon built much-needed masjids in various parts of the UK, including London, Birmingham, Peterborough and Oldham to name a few. During these early years of Islam in the West, the Shaykh fast became recognized as a leading figure, authority and inspiration to the minority Muslim community here at the time.",
        "As a result, the Shaykh began to visit the UK regularly to oversee developing projects and to ensure that they were making consistent progress. As the Shaykh’s projects flourished, so too did his following. More and more people would visit the Shaykh each day and express their wish to take bayah at his hands, entering into the Naqshbandi tareeqa. And indeed, despite the Shaykh’s busy schedule and project plans, he would always dedicate time to counsel, advise and address the Muslim community, whether speaking to them individually or in a gathering. In the words of Shah Bahauddin Naqshband, may Allah’s Mercy be upon him: “Our Way is fellowship, and the goodness is in the gathering (sohbat).”",
        "Today, by the Grace of Allah, the Shaykh is increasingly revered, loved and honoured by people from all over the world, and from all backgrounds, cultures and walks of life. Crowds of people visit him daily and attend his gatherings to benefit from his words, counsel and practical example, with the hope of rectifying their ways and strengthening their Love for Allah and the Noble Messenger, peace and blessings of Allah be upon him.",
        "In recent years (2008 onwards), Shaykh ul Aalam has traveled to various lands to convey the message of Prophetic wisdom, love, peace and mercy. The list of countries visited by the Shaykh include Norway, Belgium, Scotland, Switzerland, Italy, Spain, Saudi Arabia, Germany, India and Turkey. In this way, the Shaykh has touched thousands of hearts and delivered spiritual wealth to Muslims in many regions of the world.",
        "In the UK alone, the Shaykh’s murideen amount to hundreds of thousands in number, a figure which increases significantly with each and every day. This reflects just a fraction of the total number of his murideen worldwide. It can be likened to a loving father overseeing his large family; his love, compassion and concern for each family member remains heartfelt and uncompromised. Additionally, one of the many extraordinary qualities of Shaykh ul Aalam is that he is known to make each person feel special and most favoured by him, a trait from the blessed shama’il of the Messenger of Allah, may the peace and blessings of Allah be upon him.",
        "Today, Shaykh ul Aalam’s vision for the global Muslim community proceeds with incredible enthusiasm. The key objective is to enlighten the voids in our hearts and ultimately help us better our state as individuals and as a community, thereby strengthening the heart of every believer. Indeed, those who strive for the Sake of Allah are aided by Him!"
      ],
      details: [
        "Built masjids in the UK (London, Birmingham, Peterborough, Oldham) in the 1970s.",
        "Became a leading figure for the Muslim community in the West during the early years of Islam there.",
        "Regularly visited the UK to oversee projects and guide followers, growing his Naqshbandi tareeqa following.",
        "Traveled to countries like Norway, Belgium, and Saudi Arabia since 2008, spreading Prophetic wisdom.",
        "Has hundreds of thousands of murideen in the UK and worldwide, known for making each feel special."
      ],
    },
    {
      title: "Mohiuddin Trust",
      description: [
        "In 2004, Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui founded the Al-Ehya Trust, today known as Mohiuddin Trust. Mohiuddin Trust is a non-profit charity organisation which focuses on global issues and the betterment of deprived communities worldwide. The Trust strives to benefit those in need and empowers those who are less fortunate and under-privileged. It is divided into three wings, namely: International Development, National Awareness and Local Regeneration & Empowerment. Mohiuddin Trust not only provides much-needed humanitarian aid but also educational support in areas where it is most required.",
        "As a completely volunteer-run organisation, 100% of all donations to Mohiuddin Trust are used directly towards projects. Under the supervision of Shaykh ul Aalam, Khwaja Mohammad Alauddin Siddiqui, the Trust’s projects not only progress at a consistent pace and according to high standards, but are also maintained and monitored regularly by dedicated volunteers.",
        "Much of Mohiuddin Trust’s focus has rested on supplying aid and support to the deprived region of Azad and Jammu Kashmir, and addressing the area’s lack of basic essentials including food, clean water and medicine. The Trust also addresses vital needs of the impoverished of South-East Asia and north Pakistan.",
        "The following passage is taken from the official Mohiuddin Trust website: “In recent years, Mohiuddin Trust has gradually evolved from focusing just on international issues to concentrating on community regeneration and cohesive issues affecting people throughout the UK. Based in Aston, Birmingham, a bastion of multi-ethnicity, Mohiuddin Trust is fully aware of the obstacles and hindrances experienced by people and communities. At the grassroots level, we endeavour to empower people to improve their employment opportunities and assist them to become conscientious members of society. We strive to educate men and women on issues relating to health and domestic values.",
        "Mohiuddin Trust works very closely with the local base in Birmingham and uses it to gauge the national attitude. Birmingham is inarguably one of the most ethnically diverse cities in the UK.",
        "Mohiuddin Trust strives to implement events and initiatives that help to bridge the communication gap between people of different backgrounds with the view of strengthening inter-community relationships and eventually leading to stronger community integration and cohesion. Mohiuddin Trust aims to achieve a diverse multi-ethnic community united under a common law and a common citizenship.”"
      ],
      details: [
        "Founded Mohiuddin Trust (originally Al-Ehya Trust) in 2004 to aid deprived communities globally.",
        "Operates three wings: International Development, National Awareness, and Local Regeneration & Empowerment.",
        "Focuses on humanitarian aid and education in Azad and Jammu Kashmir, South-East Asia, and north Pakistan.",
        "Volunteer-run, with 100% of donations used directly for projects under Shaykh ul Aalam’s supervision.",
        "Promotes community integration in the UK, based in Birmingham, fostering employment and social cohesion."
      ],
    },
    {
      title: "Humanitarian Aid",
      description: [
        "In 2005, Mohiuddin Trust came to the aid of victims of the South-Asia earthquake, identifying urgent needs to support children and orphans affected by the tragedy. The Trust responded by providing approximately two thousand children with fundamental education, clothing, food, medicine and accommodation. The Trust has also played a vital role in providing disaster relief to the victims of the Pakistan earthquake in July 2010.",
        "Since then, Mohiuddin Trust has continued with its aid relief campaigns and the Trust’s dedicated volunteers are constantly on hand to ensure that all projects are continuously progressing.",
        "The Pakistan Monsoon rains in late July 2010 were described as the worst in the last 80 years. Heavy rains over the Khyber Pakhtunkhwa, Sindh, Punjab and Baluchistan regions of Pakistan flooded the Indus River basin.",
        "Approximately one-fifth of Pakistan’s total land area was underwater, approximately 796,095 square kilometers (307,374 sq miles). According to Pakistani government data the floods directly affected about 18 million people, mostly by destruction of property, livelihood and infrastructure, with a death toll of just under 2,000.",
        "The Pakistani economy was harmed by extensive damage to infrastructure and crops. Damage to structures was estimated to exceed £2 billion, and wheat crop damages were estimated to be over £360 million. Total economic impact is considered to have been as much as £30 billion.",
        "Mohiuddin Trust concentrated relief efforts in the most worst hit areas – which according to the co-ordination teams on ground were identifed as regions in and around Muzaffargarh, Kot Addu and Layyah.",
        "Mohiuddin Trust embarked on emergency relief activities to begin with by distributing urgently needed food supplies, blankets, tents and gas canisters.",
        "Mobile medical clinics were setup in concentrated areas to prescribe medical attention to the sick, of which the numbers swelled to thousands. Whilst there were many volunteers, many from the Mohiuddin Medical College, assisting in this task additional help had to be recruited to cope with the crowds.",
        "As the flood waters endured the co-ordination teams resigned to clearing away the remaining water, debris, carcases of livestock and other obstacles from the ruined remains of homes, shops and mosques. With the sheer size of the devastation the teams on the ground found their work cut out.",
        "Realising the extent of the long-term damage the Board of Trustees proposed to build new houses for the flood victims, a significant number of which were now homeless and sheltered in temporary tents and makeshift shacks. Acknowledging the magnitude of this disaster it was agreed to make provisions for some 200 houses complete with sanitation and running water.",
        "The lingering unpredictability of the weather delayed this task and further hampered by subsequent flooding at the start of 2011. The Trust faced challenges on several fronts, firstly the quest to acquire contiguous land large enough to build the proposed number of houses along with ancillary services. Secondly, in order to initiate the construction work the land needed to be suitable for constructing 200 houses and thirdly, to provide running water for the houses it was essential the acquired land was close to, or ideally on top of, sources of clean water.",
        "However in response to pleas from victims to provide housing on their respective lands and with signs of reluctance in leaving their family dwellings honourable Pir Sahib was quick to adapt the overall Trust strategy to respect the wishes of the victims. Although this proved more timely it gave a sense of satisfaction to know that our efforts would be more fruitful.",
        "Eventually in the first quarter of 2012 Mohiuddin Trust had the pleasure of announcing the completion of 200 homes dotted all around Muzaffargarh, Kot Addu and Layya. Furthermore we ended up supplementing our initial pledge by providing an additional 50 homes thanks to the outstanding project management and meticulous financial planning thus totalling 250 homes inclusive of clean running water and sanitary facilities."
      ],
      details: [
        "Provided aid to 2,000 children after the 2005 South-Asia earthquake with education, clothing, and food.",
        "Supported victims of the 2010 Pakistan earthquake and monsoon floods, affecting 18 million people.",
        "Distributed food, blankets, tents, and gas canisters in Muzaffargarh, Kot Addu, and Layyah.",
        "Set up mobile medical clinics and cleared debris post-2010 floods, with Mohiuddin Medical College volunteers.",
        "Built 250 homes with sanitation and water for flood victims by 2012, adapting to victims’ land preferences."
      ],
    },
    {
      title: "Educational Institutions",
      description: [
        "Through Mohiuddin Trust, Shaykh ul Aalam has opened the doors of educational excellence to the under-privileged. The first major project of the Trust was Mohiuddin Islamic University, of which the Shaykh himself participated in the building’s design and structure. The pink colour of the building is in accordance to the instruction of the Messenger of Allah, may Allah’s peace and blessings be upon him, who had appeared in the Shaykh’s dream at the time. Today, the university is the best educational institute in the whole of Azad and Jammu Kashmir.",
        "MIU",
        "MIMC",
        "After this project, Khwaja Alauddin Siddiqui established the Mohiuddin Medical College, as part of the University. Following its completion, plans were under way to develop Mohiuddin Hospital, which will not only provide free medical care to the impoverished of the region, but also a practical training ground for medical students who are ready to become fully-qualified doctors. This incredible initiative addresses many urgent needs of the community; for example, enabling career opportunities, crucially strengthening the number of medical experts in the region, addressing the medical needs of the impoverished, and ensuring none are deprived of basic or urgent health care on account of poverty.",
        "Moving forward, in October 2009, Shaykh ul Aalam announced and then established a much-needed educational institution for young Muslim women in Britain. The Mohiuddin International Girls College is the first ever Islamic girls’ college in the UK which educates students to Dars-e-Nizami level, raising them to the esteemed status of aalimah (female scholar of religion). Mohiuddin International Girls College, or MIGC, is located in a beautiful setting in the region of Burnley, England and its smaller second branch, which opened more recently, is situated in Birmingham. The Burnley branch of the College opened its doors to students from all over the world in October 2010 for its first ever term. Since then, it has nurtured many bright and eloquent young scholars who are set to become voices and beacons for Muslim women in the UK.",
        "MIGC",
        "The projects listed above are just a few of the better-known projects established under Mohiuddin Trust, in addition to the development of many masjids and other vital projects worldwide."
      ],
      details: [
        "Founded Mohiuddin Islamic University, the top educational institute in Azad and Jammu Kashmir.",
        "Established Mohiuddin Medical College and planned Mohiuddin Hospital for free medical care and training.",
        "Opened Mohiuddin International Girls College in Burnley (2010) and Birmingham, training female scholars.",
        "Designed the university’s pink building based on a dream instruction from the Prophet (peace be upon him).",
        "Supports under-privileged communities through education and masjid development worldwide."
      ],
     
    },
    {
      title: "Noor TV",
      description: [
        "Official website: thenoor.tv (currently offline)\nChannel: Sky, 812 (from 19th August 2014)\nBank details:: Click here for details\nInternational viewing: For Asia, Middle East & Africa (from April 2014):\n• PAKSAT\n• Frequency: 3715\n• FEC 3/4\n• SR 7200\n• Polarity: Vertical",
        "In 2006, in response to the increasingly biased agenda of the mainstream media against Islam, Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui expressed the intention to develop a purely Islamic television channel, dedicated to the Ahlus Sunnah wal Jamaat consensus. This would counter the negative image portrayed by Western media, whilst also addressing the needs of the Muslim community and portraying Islam in its true form.",
        "Consequently, in September 2006, Shaykh ul Aalam set up the television channel and named it Noor TV (‘Noor’ meaning ‘light’ in Arabic). The channel comes under the umbrella of Mohiuddin Trust, and is part of its ongoing efforts to educate and enlighten the masses. Noor TV successfully began live transmission a year later, and is now available in more than 166 countries worldwide. Today, it broadcasts a range of live and exclusive programmes, including Shaykh ul Aalam’s own Dars-e-Masnavi, and many other religious or community-related shows which address a range of topics and contemporary issues.",
        "Monthly Voluntary Subscriptions\nNoor TV is in need of your ongoing support. Your voluntary subscriptions help to maintain the channel and allow it to continue running, including the broadcasts of unique and beneficial shows such as Dars-e-Masnavi etc."
      ],
      details: [
        "Founded Noor TV in September 2006 under Mohiuddin Trust to counter media bias against Islam.",
        "Began live transmission in 2007, now available in over 166 countries via Sky 812 and PAKSAT.",
        "Broadcasts programs like Dars-e-Masnavi, focusing on Ahlus Sunnah wal Jamaat teachings.",
        "Relies on voluntary subscriptions to sustain operations and educational content."
      ],
      
    },
    {
      title: "Countering Islamophobia",
      description: [
        "Shaykh ul Aalam, Khwaja Mohammad Alauddin Siddiqui’s efforts to counter Islamophobia have also included major events and protests to raise vital awareness for the Muslims of the UK.",
        "protestreport",
        "On Saturday 6th October 2012, thousands of Muslims gathered in protest outside the Houses of Parliament in London (as seen above) to display their love for the Prophet Muhammad, peace and blessings of Allah be upon him, and to demonstrate their outrage at the recent slanderous film which insults his blessed personality and honour.",
        "The protest entitled ‘Alliance of Civilisations anti-Islamophobia Event’ saw Parliament Square overflowing with Muslims from every sect of the Islamic community, and speakers included scholars from both Sunni and Shia backgrounds. This ground-breaking unity came as a response to the call of Shaykh ul Aalam, Khwaja Mohammad Alauddin Siddiqui who called on the Muslim community to unite for this one vital cause, despite their internal differences, under the banner of the Messenger of Allah. The Shaykh spoke of the significance of the Muslim Ummah’s united front against Islamophobia, and the importance of strengthening our global image as a community. Under his esteemed leadership, the entire Muslim community willingly came together in complete harmony for one sole purpose; to display their sentiments regarding the significance of the honour of the Prophet Muhammad, peace and blessings of Allah be upon him.",
        "The peaceful protest was attended by a large number of speakers, many English-speaking, who delivered short inspiring messages to the thousands who filled the Square. The movement calls for a law to be passed in Britain which will protect the honour of the Prophet Muhammad, peace and blessings of Allah be upon him, and other Prophets, and to grant Muslims the fundamental right of respect towards their faith. Speakers included the CEO of Islam Channel, Takbeer TV, Hidayat Channel and others, to name a few."
      ],
      details: [
        "Led the 2012 ‘Alliance of Civilisations’ protest in London against a slanderous film.",
        "United Sunni and Shia scholars and thousands of Muslims to defend the Prophet’s honor.",
        "Advocated for a UK law to protect the honor of Prophet Muhammad and other Prophets.",
        "Included speakers from Islam Channel, Takbeer TV, and Hidayat Channel to raise awareness."
      ],
    },
    {
      title: "Summary",
      description: [
        "Today, Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui – may Allah’s Mercy be upon him! – is remembered for his tireless devotion in delivering spiritual counsel to the masses, aiding individuals daily with sincere advice and support, and being a true exemplar of the Prophetic Way of khidmat al khalq (serving the creation). Indeed, the Shaykh’s character was a true embodiment of the Sunnah of the Beloved Prophet ﷺ who dedicated his life to gently guiding hearts to Allah. Whether the Shaykh was in the UK or abroad, his door was always open to all for the Sake of Allah.",
        "For his teachings and counsel, the Shaykh has been affectionately known worldwide as Shaykh ul Aalam (literally meaning; Shaykh of the World). His visits to many parts of the globe, as well as his powerfully enlightening talks broadcasted via Noor TV and online, have touched thousands upon thousands of hearts and inclined them to turn back to the Path of Islam. Shaykh ul Aalam’s practical example is itself a proof of the true Way of Ahlus Sunnah wal Jamaat and Tasawwuf, and brings to mind the incredible personalities, great scholars and noble Sufis, who have enriched our Islamic history.",
        "We pray to Allah, Who is One and there is none like He, Who is Absolute and Most High — o our Lord, bless the noble Soul of our beloved Shaykh with Your infinite Mercy, Your Proximity and a high Station in both worlds. Ameen, by the intermediary of Your Beloved, Sayyidina Muhammad — may Allah’s peace and blessings forever be upon him, his Family & Companions."
      ],
      details: [
        "Known as Shaykh ul Aalam for his global spiritual counsel and embodiment of the Sunnah.",
        "Guided thousands through Noor TV broadcasts and international visits, promoting Ahlus Sunnah wal Jamaat.",
        "Dedicated his life to khidmat al khalq, keeping his door open to all for Allah’s sake.",
        "Inspired by great scholars and Sufis, leaving a lasting legacy in Islamic history."
      ],
    },
    {
      title: "Scholars Honouring Shaykh ul Aalam",
      description: [
        "Huzoor Zia ul Ummat, His Eminence Justice Pir Mohammad Karam Shah Sahib al Azhari رحمه الله (Darbar Aaliya Berah Sharif) said, on the occassion of Urs Mubarak at Nerian Sharif:\n\"Huzoor Shaykh ul Aalam is spreading the Light of Shariah and Tariqa to the Ummah in the most commendable manner, continuing to work for Islam and will always continue to do so.\" Pir Karam Shah Sahib continued: \"Nerian Sharif is such an origin of Light that the candles of knowledge are forever lit, and I foresee that a great university will be established here (referring to Mohiuddin Islamic University).\"\n",
        "Huzoor Khwaja Khwajagaan Pir Qamaruddin Sialwi رحمه الله (Aastana Aaliya Sial Sharif) said, at the 1972 Sunni Conference:\n\"The (then) Sahibzada [Huzoor Shaykh ul Aalam] possesses a glittering Light upon his blessed forehead, and from this we know that Pir Siddiqui, throughout the entire world, will achieve great things for Islam.\"\n",
        "Hadhrat Allamah Pir Shah Ahmad Noorani رحمه الله said:\n\"If I could have found one more Huzoor Shaykh ul Alam in Pakistan, I would have changed the face of the country!\"\n",
        "His Eminence, master of pen and poetry, the flag bearer of Ala Hadhrat Khwaja Sayyid Pir Meher Ali Shah رحمه الله who dispelled the darkness of the Qadiani movement, aashiq of Mustafa ﷺ and of the Family of Mustafa ﷺ, Pir Sayyid Naseeruddin Naseer al Jilani (Aastana Aaliya Ghausia Mehrya Golra Sharif):\n\"What Huzoor Shaykh ul Aalam have started with the work of Noor TV is no small accomplishment. I have declared to the Ulama of the Ahlus Sunnah that this is our shining hope: Noor TV. What else is there? This is a feat no Pir or Mawlana had achieved before. It is no small matter that tens of thousands of people are receiving the message of Allah's religion [through this channel]. May Allah accept Huzoor Shaykh ul Aalam's both religious and social work.\"\n",
        "Pirzada Mohammad Imdad Hussain (Jamia Al Karam, Britain and disciple of Huzoor Zia ul Ummat, Pir Mohammad Karam Shah Sahib al Azhari رحمه الله) said:\n\"High is his ambition, so charming His speech, so beautiful his soul,\nThat is all he needs for the journey, he who leads the Caravan!\"\n\"For a thousand years, the Nargis flower weeps for its blindness,\nOnly through great difficulty, is one borne in the Garden with true vision.\"\n(Allama Iqbal رحمه الله)\nThe second verse is an analogy: that the Nargis flower, which looks like an eye, cries (i.e. dew drops) for thousands of years over its blindness [alluding to the fact that] it very rarely blooms - or [in other words], \"attains vision\". Similarly, for years, Islam and the Ahlus Sunnah wal Jamaat were perhaps inactive or dormant, yet Huzoor Shaykh ul Aalam stepped forward as our Leader, as the rare flower with exemplary vision."
      ],
      details: [
        "Pir Mohammad Karam Shah Sahib praised Shaykh ul Aalam’s work and foresaw Mohiuddin Islamic University.",
        "Pir Qamaruddin Sialwi predicted global achievements for Shaykh ul Aalam at the 1972 Sunni Conference.",
        "Pir Shah Ahmad Noorani said Shaykh ul Aalam could transform Pakistan if replicated.",
        "Pir Naseeruddin Naseer hailed Noor TV as a unique feat for Ahlus Sunnah wal Jamaat.",
        "Pirzada Mohammad Imdad Hussain likened Shaykh ul Aalam to a rare visionary leader, quoting Allama Iqbal."
      ],
    },
  
  
  // Dynamically generate the remaining topics
  ...Array(10).fill().map((_, i) => ({
    title: topics[i + 3],
    description: `Detailed information about ${topics[i + 3]}.`,
    details: [`Detail 1 about ${topics[i + 3]}`, `Detail 2 about ${topics[i + 3]}`],
  })),
  {
    title: "Scholars Honouring Shaykh ul Aalam",
    description: "Tributes from scholars recognizing Huzoor's contributions.",
    details: [
      "Scholars worldwide have praised Huzoor's work.",
      "His efforts in promoting peace have been widely acknowledged."
    ],
  },
];

export default function Huzoor() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.07, 1]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  // Timeline curve settings
  const gap = 240;
  const minHeight = 180;
  const totalHeight = topics.length * (gap + minHeight);
  const amplitude = 20;
  const frequency = 2 * Math.PI / (gap + minHeight);
  const goldColor = "#D4AF37";

  // Build the SVG path string
  let d = `M50 0`;
  for (let i = 0; i < topics.length; i++) {
    const startY = i * (gap + minHeight);
    const endY = (i + 1) * (gap + minHeight);
    const cp1X = 50 + amplitude * Math.sin(frequency * startY);
    const cp1Y = startY + (gap + minHeight) / 3;
    const cp2X = 50 + amplitude * Math.sin(frequency * endY);
    const cp2Y = startY + 2 * (gap + minHeight) / 3;
    const endX = 50 + amplitude * Math.sin(frequency * endY);
    d += ` C${cp1X.toFixed(2)} ${cp1Y.toFixed(2)}, ${cp2X.toFixed(2)} ${cp2Y.toFixed(2)}, ${endX.toFixed(2)} ${endY.toFixed(2)}`;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <header className="text-center pt-16 pb-8">
        <h1 className="text-3xl font-bold" style={{ color: goldColor }}>
          Journey Through the Life of Huzoor
        </h1>
      </header>

      <section className="relative max-w-6xl mx-auto px-4" style={{ minHeight: `${totalHeight}px` }}>
        {/* Timeline path */}
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-full z-0"
          viewBox={`0 0 100 ${totalHeight}`}
          preserveAspectRatio="none"
        >
          <motion.path
            d={d}
            stroke={goldColor}
            strokeWidth="2"
            fill="none"
            style={{ pathLength }}
          />
        </svg>

        {/* Timeline dots and cards */}
        <div className="relative z-10 flex flex-col gap-[240px]">
          {topics.map((topic, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative w-full max-w-5xl mx-auto flex flex-col sm:${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-6 sm:gap-10`}
                style={{ minHeight: `${minHeight}px` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 border-4 border-white bg-yellow-500 rounded-full shadow-lg z-20 cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                  title={`Click to read about ${topic}`}
                  role="button"
                  aria-label={`Open details for ${topic}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(index)}
                />

                {/* Topic card */}
                <div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer w-full sm:w-[calc(50%-40px)]"
                  onClick={() => setSelectedIndex(index)}
                  role="button"
                  aria-label={`Open details for ${topic}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(index)}
                >
                  <h2 className="text-xl font-semibold mb-2" style={{ color: goldColor }}>
                    {topic}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Click to explore more about <strong>{topic}</strong>.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Expanded content modal */}
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            initial={{ scale: 0.8, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="topic-title"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 id="topic-title" className="text-2xl font-bold mb-4" style={{ color: goldColor }}>
              {topicContent[selectedIndex].title}
            </h3>
            {topicContent[selectedIndex].image && (
              <img
                src={topicContent[selectedIndex].image}
                alt={`${topicContent[selectedIndex].title} image`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            {/* Render description as multiple paragraphs */}
            <div className="text-gray-700 dark:text-gray-300 mb-4">
              {Array.isArray(topicContent[selectedIndex].description) ? (
                topicContent[selectedIndex].description.map((paragraph, i) => (
                  <p key={i} className="mb-4 whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="mb-4 whitespace-pre-wrap">
                  {topicContent[selectedIndex].description}
                </p>
              )}
            </div>
            <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300">
              {topicContent[selectedIndex].details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setSelectedIndex(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}