import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Define topics first
const topics = [
  "The Spiritual Lineage of Khwaja Ghulam Mohiuddin Ghaznavi",
  "Beloved Messenger of Allah, Sayyidina Muhammad Mustafa, may Allah’s peace and blessings be upon him",
  "Sayyidina Abu Bakr as-Siddiq, may Allah be pleased with him",
  "Sayyidina Salman al-Farsi, may Allah be pleased with him",
  "Sayyidina Qasim ibn Mohammad ibn Abu Bakr, may Allah be pleased with him",
  "Sayyidina Imam Jafar as-Sadiq, may Allah’s Mercy be upon him",
  "Khwaja Bayazid al-Bustami, may Allah’s Mercy be upon him",
  "Khwaja Abul Hassan Ali al-Kharqani, may Allah’s Mercy be upon him",
  "Khwaja Shah Abu Ali al-Faarmadi, may Allah’s Mercy be upon him",
  "Khwaja Abu Yusuf al-Hamdani, may Allah’s Mercy be upon him",
  "Khwaja Abdul Khaliq al-Ghujdawani, may Allah’s Mercy be upon him",
  "Khwaja Mohammad Arif ar-Riwkari, may Allah’s Mercy be upon him",
  "Khwaja Mahmud al-Faghnawi, may Allah’s Mercy be upon him",
  "Khwaja Ali ar-Ramitani, may Allah’s Mercy be upon him",
  "Khwaja Mohammad Baba as-Samasi, may Allah’s Mercy be upon him",
  "Khwaja Shamsuddin Sayyid Ameer Kalal, may Allah’s Mercy be upon him",
  "Imam-e-Tareeqat Khwaja Syed Mohammad Baha’uddin Shah Naqshband, may Allah’s Mercy be upon him",
  "Khwaja Alauddin al-Attar, may Allah’s Mercy be upon him",
  "Khwaja Mohammad Yaqub al-Charkhi, may Allah’s Mercy be upon him",
  "Khwaja Ubaydullah al-Ahrar, may Allah’s Mercy be upon him",
  "Khwaja Mohammad Zahid as-Samarqandi, may Allah’s Mercy be upon him",
  "Khwaja Darvesh Mohammad, may Allah’s Mercy be upon him",
  "Khwaja Shah Mohammad Muqtada al-Amkanaki, may Allah’s Mercy be upon him",
  "Khwaja Syed Mohammad Baqi Billah, may Allah’s Mercy be upon him",
  "Khwaja Shaykh Mujaddid Alf Thaani Ahmad al-Faruqi as-Sirhindi, may Allah’s Mercy be upon him",
  "Khwaja Shah Syed Hussain, may Allah’s Mercy be upon him",
  "Khwaja Syed Abdul Basit, may Allah’s Mercy be upon him",
  "Khwaja Syed Abdul Qadir, may Allah’s Mercy be upon him",
  "Khwaja Syed Mahmood, may Allah’s Mercy be upon him",
  "Khwaja Syed Ubaydullah Shah, may Allah’s Mercy be upon him",
  "Khwaja Syed Inayatullah Shah, may Allah’s Mercy be upon him",
  "Khwaja Mohammad Hafiz Ahmad, may Allah’s Mercy be upon him",
  "Khwaja Abdul Saboor, may Allah’s Mercy be upon him",
  "Khwaja Gul Mohammad, may Allah’s Mercy be upon him",
  "Khwaja Abdul Ghafoor, may Allah’s Mercy be upon him",
  "Khwaja Abdul Majeed, may Allah’s Mercy be upon him",
  "Khwaja Abdul Azeez, may Allah’s Mercy be upon him",
  "Khwaja Sultan Mohammad Malook, may Allah’s Mercy be upon him",
  "Khwaja Mohammad Nizamuddin Kiyanvi, may Allah’s Mercy be upon him",
  "Mujaddid-e-Deen-o-Millat Khwaja Mohammad Qasim Sadiq Mohrvi, may Allah’s Mercy be upon him",
  "Ghawth ul Ummat, Aarif Billah, Khwaja Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon him",
  "Khwaja Pir Mohammad Durrab Khan, may Allah’s Mercy be upon him",
  "Khwaja Pir Mohammad Alauddin Siddiqui, may Allah grant him long life and elevate his status"
];

// Define topicContent after topics
const topicContent = [
  {
    title: "The Spiritual Lineage of Khwaja Ghulam Mohiuddin Ghaznavi",
    description: [
      "The spiritual lineage of Khwaja Ghulam Mohiuddin Ghaznavi represents a blessed chain of saints and scholars in the Naqshbandiyya Siddiqui Mujaddidi order, tracing back to the Beloved Messenger of Allah, Sayyidina Muhammad Mustafa, may Allah’s peace and blessings be upon him. This lineage is marked by luminaries who have upheld the Shariah and Tariqa, guiding countless souls to Allah.",
      "This sacred silsila includes eminent Companions, revered Imams, and Sufi masters, culminating in the modern era with Khwaja Ghulam Mohiuddin Ghaznavi, the founder of Darbar Nerian Sharif, and his son, Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui. Each figure in this chain has contributed to the preservation and propagation of Islam’s spiritual and scholarly heritage."
    ],
    details: [
      "Traces the Naqshbandiyya Siddiqui Mujaddidi order from the Prophet (peace be upon him) to modern times.",
      "Includes Companions, Imams, and Sufi saints who guided the Ummah in Shariah and Tariqa.",
      "Culminates with Khwaja Ghulam Mohiuddin Ghaznavi and Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui."
    ],
    image: "https://via.placeholder.com/400x200?text=Spiritual+Lineage"
  },
  {
    title: "Beloved Messenger of Allah, Sayyidina Muhammad Mustafa, may Allah’s peace and blessings be upon him",
    description: [
      "The Beloved Messenger of Allah, Sayyidina Muhammad Mustafa, may Allah’s peace and blessings be upon him, is the final Prophet and the source of all spiritual guidance in Islam. His Sunnah and teachings form the foundation of the Naqshbandiyya order and all Sufi paths.",
      "As the leader of all Prophets and the mercy to the worlds, his life exemplifies the perfect balance of Shariah and spirituality, inspiring the lineage of Khwaja Ghulam Mohiuddin Ghaznavi and his successors."
    ],
    details: [
      "Final Prophet and source of all Islamic spiritual guidance.",
      "His Sunnah is the foundation of the Naqshbandiyya order.",
      "Inspires the spiritual lineage culminating in Khwaja Ghulam Mohiuddin Ghaznavi."
    ],
    image: "https://via.placeholder.com/400x200?text=Prophet+Muhammad"
  },
  {
    title: "Sayyidina Abu Bakr as-Siddiq, may Allah be pleased with him",
    description: [
      "Sayyidina Abu Bakr as-Siddiq, may Allah be pleased with him, was the first Caliph and the closest Companion of the Prophet, known for his unwavering faith and loyalty.",
      "His spiritual legacy in the Naqshbandiyya order highlights his role as a key link in the transmission of sacred knowledge."
    ],
    details: [
      "First Caliph and closest Companion of the Prophet.",
      "Key figure in the Naqshbandiyya spiritual chain."
    ],
    image: "https://via.placeholder.com/400x200?text=Abu+Bakr+as-Siddiq"
  },
  {
    title: "Sayyidina Salman al-Farsi, may Allah be pleased with him",
    description: [
      "Sayyidina Salman al-Farsi, may Allah be pleased with him, was a revered Companion known for his quest for truth and wisdom, bridging cultures in the service of Islam.",
      "His inclusion in the Naqshbandiyya lineage underscores the universal appeal of the Prophet’s message."
    ],
    details: [
      "Companion who sought truth across cultures.",
      "Integral to the Naqshbandiyya spiritual lineage."
    ],
    image: "https://via.placeholder.com/400x200?text=Salman+al-Farsi"
  },
  {
    title: "Sayyidina Qasim ibn Mohammad ibn Abu Bakr, may Allah be pleased with him",
    description: [
      "Sayyidina Qasim ibn Mohammad ibn Abu Bakr, may Allah be pleased with him, was a descendant of Abu Bakr, renowned for his piety and scholarship.",
      "He played a vital role in transmitting spiritual knowledge within the Naqshbandiyya order."
    ],
    details: [
      "Descendant of Abu Bakr, known for piety.",
      "Transmitted spiritual knowledge in the Naqshbandiyya chain."
    ],
    image: "https://via.placeholder.com/400x200?text=Qasim+ibn+Mohammad"
  },
  {
    title: "Sayyidina Imam Jafar as-Sadiq, may Allah’s Mercy be upon him",
    description: [
      "Sayyidina Imam Jafar as-Sadiq, may Allah’s Mercy be upon him, was a leading scholar and spiritual guide, known for his contributions to Islamic jurisprudence and mysticism.",
      "His teachings form a cornerstone of the Naqshbandiyya spiritual path."
    ],
    details: [
      "Renowned scholar and mystic.",
      "Key figure in the Naqshbandiyya spiritual lineage."
    ],
    image: "https://via.placeholder.com/400x200?text=Imam+Jafar+as-Sadiq"
  },
  {
    title: "Khwaja Bayazid al-Bustami, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Bayazid al-Bustami, may Allah’s Mercy be upon him, was a pioneering Sufi saint known for his ecstatic utterances and deep love for Allah.",
      "His spiritual insights shaped the early development of the Naqshbandiyya order."
    ],
    details: [
      "Pioneering Sufi known for ecstatic spirituality.",
      "Influenced the Naqshbandiyya order’s early development."
    ],
    image: "https://via.placeholder.com/400x200?text=Bayazid+al-Bustami"
  },
  {
    title: "Khwaja Abul Hassan Ali al-Kharqani, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Abul Hassan Ali al-Kharqani, may Allah’s Mercy be upon him, was a revered Sufi master who emphasized divine love and service to humanity.",
      "His teachings strengthened the Naqshbandiyya lineage’s focus on spiritual purification."
    ],
    details: [
      "Sufi master emphasizing divine love.",
      "Strengthened Naqshbandiyya’s spiritual focus."
    ],
    image: "https://via.placeholder.com/400x200?text=Abul+Hassan+al-Kharqani"
  },
  {
    title: "Khwaja Shah Abu Ali al-Faarmadi, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Shah Abu Ali al-Faarmadi, may Allah’s Mercy be upon him, was a key figure in the Naqshbandiyya order, known for his scholarly and spiritual contributions.",
      "He helped formalize the order’s practices and teachings."
    ],
    details: [
      "Scholar and spiritual guide in the Naqshbandiyya order.",
      "Formalized key practices of the order."
    ],
    image: "https://via.placeholder.com/400x200?text=Abu+Ali+al-Faarmadi"
  },
  {
    title: "Khwaja Abu Yusuf al-Hamdani, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Abu Yusuf al-Hamdani, may Allah’s Mercy be upon him, was a prominent Sufi who spread the Naqshbandiyya teachings across Central Asia.",
      "His efforts expanded the order’s influence and reach."
    ],
    details: [
      "Spread Naqshbandiyya teachings in Central Asia.",
      "Expanded the order’s influence."
    ],
    image: "https://via.placeholder.com/400x200?text=Abu+Yusuf+al-Hamdani"
  },
  {
    title: "Khwaja Abdul Khaliq al-Ghujdawani, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Abdul Khaliq al-Ghujdawani, may Allah’s Mercy be upon him, introduced key spiritual practices, such as silent dhikr, to the Naqshbandiyya order.",
      "His innovations remain central to the order’s methodology."
    ],
    details: [
      "Introduced silent dhikr to the Naqshbandiyya order.",
      "Central figure in the order’s spiritual practices."
    ],
    image: "https://via.placeholder.com/400x200?text=Abdul+Khaliq+al-Ghujdawani"
  },
  {
    title: "Khwaja Mohammad Arif ar-Riwkari, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Mohammad Arif ar-Riwkari, may Allah’s Mercy be upon him, was a Sufi master who deepened the Naqshbandiyya order’s emphasis on spiritual discipline.",
      "His teachings guided many disciples in the path of Allah."
    ],
    details: [
      "Emphasized spiritual discipline in the Naqshbandiyya order.",
      "Guided numerous disciples."
    ],
    image: "https://via.placeholder.com/400x200?text=Mohammad+Arif+ar-Riwkari"
  },
  {
    title: "Khwaja Mahmud al-Faghnawi, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Mahmud al-Faghnawi, may Allah’s Mercy be upon him, was known for his piety and dedication to spreading the Naqshbandiyya teachings.",
      "He played a key role in the order’s expansion."
    ],
    details: [
      "Known for piety and spreading Naqshbandiyya teachings.",
      "Contributed to the order’s expansion."
    ],
    image: "https://via.placeholder.com/400x200?text=Mahmud+al-Faghnawi"
  },
  {
    title: "Khwaja Ali ar-Ramitani, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Ali ar-Ramitani, may Allah’s Mercy be upon him, was a revered Naqshbandi saint who emphasized humility and devotion.",
      "His legacy strengthened the order’s spiritual framework."
    ],
    details: [
      "Emphasized humility and devotion.",
      "Strengthened the Naqshbandiyya spiritual framework."
    ],
    image: "https://via.placeholder.com/400x200?text=Ali+ar-Ramitani"
  },
  {
    title: "Khwaja Mohammad Baba as-Samasi, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Mohammad Baba as-Samasi, may Allah’s Mercy be upon him, was a pivotal figure in the Naqshbandiyya order, mentoring many prominent saints.",
      "His guidance shaped the order’s future leaders."
    ],
    details: [
      "Mentored key Naqshbandi saints.",
      "Shaped the order’s future leadership."
    ],
    image: "https://via.placeholder.com/400x200?text=Mohammad+Baba+as-Samasi"
  },
  {
    title: "Khwaja Shamsuddin Sayyid Ameer Kalal, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Shamsuddin Sayyid Ameer Kalal, may Allah’s Mercy be upon him, was a Naqshbandi master who trained the great Khwaja Baha’uddin Naqshband.",
      "His teachings laid the groundwork for the order’s prominence."
    ],
    details: [
      "Trained Khwaja Baha’uddin Naqshband.",
      "Laid groundwork for Naqshbandiyya prominence."
    ],
    image: "https://via.placeholder.com/400x200?text=Shamsuddin+Ameer+Kalal"
  },
  {
    title: "Imam-e-Tareeqat Khwaja Syed Mohammad Baha’uddin Shah Naqshband, may Allah’s Mercy be upon him",
    description: [
      "Imam-e-Tareeqat Khwaja Syed Mohammad Baha’uddin Shah Naqshband, may Allah’s Mercy be upon him, was the founder of the Naqshbandiyya order, known for his emphasis on silent dhikr and spiritual sobriety.",
      "His teachings formalized the order, influencing generations of Sufis."
    ],
    details: [
      "Founder of the Naqshbandiyya order.",
      "Emphasized silent dhikr and spiritual sobriety."
    ],
    image: "https://via.placeholder.com/400x200?text=Baha’uddin+Naqshband"
  },
  {
    title: "Khwaja Alauddin al-Attar, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Alauddin al-Attar, may Allah’s Mercy be upon him, was a key disciple of Baha’uddin Naqshband, spreading his teachings widely.",
      "His efforts solidified the Naqshbandiyya order’s structure."
    ],
    details: [
      "Disciple of Baha’uddin Naqshband.",
      "Solidified the Naqshbandiyya order’s structure."
    ],
    image: "https://via.placeholder.com/400x200?text=Alauddin+al-Attar"
  },
  {
    title: "Khwaja Mohammad Yaqub al-Charkhi, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Mohammad Yaqub al-Charkhi, may Allah’s Mercy be upon him, was a Naqshbandi saint who emphasized scholarly and spiritual balance.",
      "His teachings influenced the order’s growth in Central Asia."
    ],
    details: [
      "Emphasized scholarly and spiritual balance.",
      "Influenced Naqshbandiyya growth in Central Asia."
    ],
    image: "https://via.placeholder.com/400x200?text=Yaqub+al-Charkhi"
  },
  {
    title: "Khwaja Ubaydullah al-Ahrar, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Ubaydullah al-Ahrar, may Allah’s Mercy be upon him, was a prominent Naqshbandi leader known for his socio-political influence and spiritual guidance.",
      "He expanded the order’s reach significantly."
    ],
    details: [
      "Known for socio-political influence.",
      "Expanded Naqshbandiyya’s reach."
    ],
    image: "https://via.placeholder.com/400x200?text=Ubaydullah+al-Ahrar"
  },
  {
    title: "Khwaja Mohammad Zahid as-Samarqandi, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Mohammad Zahid as-Samarqandi, may Allah’s Mercy be upon him, was a Naqshbandi saint who deepened the order’s spiritual practices.",
      "His legacy strengthened the order’s presence in Central Asia."
    ],
    details: [
      "Deepened Naqshbandiyya spiritual practices.",
      "Strengthened the order in Central Asia."
    ],
    image: "https://via.placeholder.com/400x200?text=Zahid+as-Samarqandi"
  },
  {
    title: "Khwaja Darvesh Mohammad, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Darvesh Mohammad, may Allah’s Mercy be upon him, was a Naqshbandi master who guided many disciples in the path of Allah.",
      "His teachings reinforced the order’s spiritual discipline."
    ],
    details: [
      "Guided numerous disciples.",
      "Reinforced Naqshbandiyya spiritual discipline."
    ],
    image: "https://via.placeholder.com/400x200?text=Darvesh+Mohammad"
  },
  {
    title: "Khwaja Shah Mohammad Muqtada al-Amkanaki, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Shah Mohammad Muqtada al-Amkanaki, may Allah’s Mercy be upon him, was a key figure in the Naqshbandiyya order, known for his piety and leadership.",
      "His efforts helped sustain the order’s influence."
    ],
    details: [
      "Known for piety and leadership.",
      "Sustained Naqshbandiyya’s influence."
    ],
    image: "https://via.placeholder.com/400x200?text=Muqtada+al-Amkanaki"
  },
  {
    title: "Khwaja Syed Mohammad Baqi Billah, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Syed Mohammad Baqi Billah, may Allah’s Mercy be upon him, was a Naqshbandi saint who revitalized the order in the Indian subcontinent.",
      "His teachings inspired the Mujaddidi branch."
    ],
    details: [
      "Revitalized Naqshbandiyya in the Indian subcontinent.",
      "Inspired the Mujaddidi branch."
    ],
    image: "https://via.placeholder.com/400x200?text=Baqi+Billah"
  },
  {
    title: "Khwaja Shaykh Mujaddid Alf Thaani Ahmad al-Faruqi as-Sirhindi, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Shaykh Mujaddid Alf Thaani Ahmad al-Faruqi as-Sirhindi, may Allah’s Mercy be upon him, was a reformer who founded the Mujaddidi branch of the Naqshbandiyya order.",
      "His efforts countered un-Islamic practices and revitalized Islamic scholarship."
    ],
    details: [
      "Founded the Mujaddidi branch of Naqshbandiyya.",
      "Reformed Islamic practices and scholarship."
    ],
    image: "https://via.placeholder.com/400x200?text=Mujaddid+Alf+Thaani"
  },
  {
    title: "Khwaja Shah Syed Hussain, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Shah Syed Hussain, may Allah’s Mercy be upon him, was a Naqshbandi saint who continued the Mujaddidi teachings.",
      "His guidance strengthened the order’s presence."
    ],
    details: [
      "Continued Mujaddidi teachings.",
      "Strengthened Naqshbandiyya presence."
    ],
    image: "https://via.placeholder.com/400x200?text=Syed+Hussain"
  },
  {
    title: "Khwaja Syed Abdul Basit, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Syed Abdul Basit, may Allah’s Mercy be upon him, was a Naqshbandi master who upheld the Mujaddidi spiritual legacy.",
      "His teachings guided many disciples."
    ],
    details: [
      "Upheld Mujaddidi spiritual legacy.",
      "Guided numerous disciples."
    ],
    image: "https://via.placeholder.com/400x200?text=Abdul+Basit"
  },
  {
    title: "Khwaja Syed Abdul Qadir, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Syed Abdul Qadir, may Allah’s Mercy be upon him, was a Naqshbandi saint known for his devotion and scholarship.",
      "His efforts sustained the Mujaddidi order."
    ],
    details: [
      "Known for devotion and scholarship.",
      "Sustained the Mujaddidi order."
    ],
    image: "https://via.placeholder.com/400x200?text=Abdul+Qadir"
  },
  {
    title: "Khwaja Syed Mahmood, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Syed Mahmood, may Allah’s Mercy be upon him, was a Naqshbandi master who spread the Mujaddidi teachings.",
      "His guidance inspired many followers."
    ],
    details: [
      "Spread Mujaddidi teachings.",
      "Inspired many followers."
    ],
    image: "https://via.placeholder.com/400x200?text=Syed+Mahmood"
  },
  {
    title: "Khwaja Syed Ubaydullah Shah, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Syed Ubaydullah Shah, may Allah’s Mercy be upon him, was a Naqshbandi saint who deepened the Mujaddidi spiritual practices.",
      "His legacy strengthened the order."
    ],
    details: [
      "Deepened Mujaddidi spiritual practices.",
      "Strengthened the Naqshbandiyya order."
    ],
    image: "https://via.placeholder.com/400x200?text=Ubaydullah+Shah"
  },
  {
    title: "Khwaja Syed Inayatullah Shah, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Syed Inayatullah Shah, may Allah’s Mercy be upon him, was a Naqshbandi master who guided disciples in the Mujaddidi path.",
      "His teachings reinforced spiritual discipline."
    ],
    details: [
      "Guided disciples in the Mujaddidi path.",
      "Reinforced spiritual discipline."
    ],
    image: "https://via.placeholder.com/400x200?text=Inayatullah+Shah"
  },
  {
    title: "Khwaja Mohammad Hafiz Ahmad, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Mohammad Hafiz Ahmad, may Allah’s Mercy be upon him, was a Naqshbandi saint known for his piety and scholarship.",
      "His efforts sustained the Mujaddidi order."
    ],
    details: [
      "Known for piety and scholarship.",
      "Sustained the Mujaddidi order."
    ],
    image: "https://via.placeholder.com/400x200?text=Hafiz+Ahmad"
  },
  {
    title: "Khwaja Abdul Saboor, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Abdul Saboor, may Allah’s Mercy be upon him, was a Naqshbandi master who spread the Mujaddidi teachings.",
      "His guidance inspired many followers."
    ],
    details: [
      "Spread Mujaddidi teachings.",
      "Inspired many followers."
    ],
    image: "https://via.placeholder.com/400x200?text=Abdul+Saboor"
  },
  {
    title: "Khwaja Gul Mohammad, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Gul Mohammad, may Allah’s Mercy be upon him, was a Naqshbandi saint who upheld the Mujaddidi spiritual legacy.",
      "His teachings guided many disciples."
    ],
    details: [
      "Upheld Mujaddidi spiritual legacy.",
      "Guided numerous disciples."
    ],
    image: "https://via.placeholder.com/400x200?text=Gul+Mohammad"
  },
  {
    title: "Khwaja Abdul Ghafoor, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Abdul Ghafoor, may Allah’s Mercy be upon him, was a Naqshbandi master known for his devotion and scholarship.",
      "His efforts sustained the Mujaddidi order."
    ],
    details: [
      "Known for devotion and scholarship.",
      "Sustained the Mujaddidi order."
    ],
    image: "https://via.placeholder.com/400x200?text=Abdul+Ghafoor"
  },
  {
    title: "Khwaja Abdul Majeed, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Abdul Majeed, may Allah’s Mercy be upon him, was a Naqshbandi saint who spread the Mujaddidi teachings.",
      "His guidance inspired many followers."
    ],
    details: [
      "Spread Mujaddidi teachings.",
      "Inspired many followers."
    ],
    image: "https://via.placeholder.com/400x200?text=Abdul+Majeed"
  },
  {
    title: "Khwaja Abdul Azeez, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Abdul Azeez, may Allah’s Mercy be upon him, was a Naqshbandi master who deepened the Mujaddidi spiritual practices.",
      "His legacy strengthened the order."
    ],
    details: [
      "Deepened Mujaddidi spiritual practices.",
      "Strengthened the Naqshbandiyya order."
    ],
    image: "https://via.placeholder.com/400x200?text=Abdul+Azeez"
  },
  {
    title: "Khwaja Sultan Mohammad Malook, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Sultan Mohammad Malook, may Allah’s Mercy be upon him, was a Naqshbandi saint known for his piety and leadership.",
      "His efforts sustained the Mujaddidi order."
    ],
    details: [
      "Known for piety and leadership.",
      "Sustained the Mujaddidi order."
    ],
    image: "https://via.placeholder.com/400x200?text=Sultan+Mohammad+Malook"
  },
  {
    title: "Khwaja Mohammad Nizamuddin Kiyanvi, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Mohammad Nizamuddin Kiyanvi, may Allah’s Mercy be upon him, was a Naqshbandi master who guided disciples in the Mujaddidi path.",
      "His teachings reinforced spiritual discipline."
    ],
    details: [
      "Guided disciples in the Mujaddidi path.",
      "Reinforced spiritual discipline."
    ],
    image: "https://via.placeholder.com/400x200?text=Nizamuddin+Kiyanvi"
  },
  {
    title: "Mujaddid-e-Deen-o-Millat Khwaja Mohammad Qasim Sadiq Mohrvi, may Allah’s Mercy be upon him",
    description: [
      "Mujaddid-e-Deen-o-Millat Khwaja Mohammad Qasim Sadiq Mohrvi, may Allah’s Mercy be upon him, was a great saint and reformer in the Naqshbandiyya Mujaddidi order, known as the ghawth of his era.",
      "His spiritual leadership and teachings profoundly influenced the region, and his legacy continues through his successors, including Khwaja Ghulam Mohiuddin Ghaznavi."
    ],
    details: [
      "Renowned as the ghawth of his era.",
      "Influenced the Naqshbandiyya Mujaddidi order profoundly.",
      "Legacy continued through Khwaja Ghulam Mohiuddin Ghaznavi."
    ],
    image: "https://via.placeholder.com/400x200?text=Qasim+Sadiq+Mohrvi"
  },
  {
    title: "Ghawth ul Ummat, Aarif Billah, Khwaja Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon him",
    description: [
      "Ghawth ul Ummat, Aarif Billah, Khwaja Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon him, was the great wali and founder of Darbar Nerian Sharif. His life was dedicated to serving the Way of Allah and His Messenger, may Allah’s peace and blessings be upon him, through spiritual guidance and counseling.",
      "From his early 20s until his passing, he remained at Darbar Nerian Sharif, strengthening people’s love for Allah alongside his brother, Khwaja Mohammad Durrab Khan. His genealogy traces back to Sayyidina Khalid ibn al Waleed, may Allah be pleased with him.",
      "As a spiritual guide, he bestowed khilafat upon his son, Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui, entrusting him with the mission to propagate Islam globally."
    ],
    details: [
      "Founder of Darbar Nerian Sharif and a great wali.",
      "Dedicated his life to spiritual guidance at Nerian Sharif.",
      "Genealogy traces to Sayyidina Khalid ibn al Waleed.",
      "Bestowed khilafat on his son, Shaykh ul Aalam."
    ],
    image: "https://via.placeholder.com/400x200?text=Ghulam+Mohiuddin+Ghaznavi"
  },
  {
    title: "Khwaja Pir Mohammad Durrab Khan, may Allah’s Mercy be upon him",
    description: [
      "Khwaja Pir Mohammad Durrab Khan, may Allah’s Mercy be upon him, affectionately known as Pir Saani Sahib, was a qalandar saint and the paternal uncle of Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui. He was deeply absorbed in the realities of the Unseen and the Love of Allah.",
      "He accompanied his brother, Khwaja Ghulam Mohiuddin Ghaznavi, throughout their time at Darbar Nerian Sharif until their departure from this world. Both are buried in the blessed mausoleum of Nerian Sharif."
    ],
    details: [
      "Qalandar saint known as Pir Saani Sahib.",
      "Paternal uncle of Shaykh ul Aalam, buried at Nerian Sharif.",
      "Devoted to the Unseen and Love of Allah."
    ],
    image: "https://via.placeholder.com/400x200?text=Mohammad+Durrab+Khan"
  },
  {
    title: "Khwaja Pir Mohammad Alauddin Siddiqui, may Allah grant him long life and elevate his status",
    description: [
      "1st January 1938 – 3rd February 2017\nDarbar Aaliya Nerian Sharif, AJK\nNaqshbandiyya Siddiqui Mujaddidi\nFounder of Mohiuddin Trust, Chairman Noor TV",
      "Born in Azad Kashmir, Shaykh ul Aalam Khwaja Mohammad Alauddin Siddiqui, may Allah sanctify his secret, was raised at the noble feet of the ghawth of his era, his father and Shaykh, Khwaja Ghulam Mohiuddin Ghaznavi, may Allah’s Mercy be upon them both. From a young age, Shaykh ul Aalam had always viewed himself first and foremost as a mureed (spiritual disciple) of his father, adorning the garment of humility and spending his early years dedicated to the way of khidmat (service). This khidmat consisted largely of serving the many visitors who flocked to Darbar Nerian Sharif daily, hoping to meet Khwaja Ghulam Mohiuddin Ghaznavi and benefit from his spiritual counsel and compassion.",
      "In this way, Shaykh ul Aalam grew up in a blessed environment, leading him to yearn for the pursuit of enlightened knowledge. Soon he would attain the esteemed rank as an ‘Aalim (scholar), yet this further increased the Shaykh in humility, sincerity and compassion, and his wisdom was sought by all. In his words and ways, the Shaykh’s deep admiration of traditional scholars and Sufiya is evident, including that of Shah Baha uddin Naqshband, Imam al Ghazali, Mawlana Jalal uddin Rumi, Shah Wali ullah Muhaddith Dehlvi, Imam Suyuti, Imam Abu Hanifa; the list is infinite. May Allah’s Mercy be upon them all. As a testament to this, Shaykh ul Aalam was awarded the Lifetime Achievement Award in 2012, at the annual Urs Mubarak of Aastana Aalia Nerian Sharif, the footage of which can be seen here.",
      "Shaykh ul Aalam studied his early Islamic education under his father, later pursuing advanced studies in Mishkat Sharif, Jalalayn, and Tafsir-ul-Qur’an at renowned institutions. He received khilafat from his father and was sent to propagate Islam, eventually becoming the sajjada nasheen of Darbar Nerian Sharif in 1974.",
      "His global efforts include founding Mohiuddin Trust in 2004, establishing Noor TV in 2006, building masjids in the UK, and leading educational initiatives like Mohiuddin Islamic University and Mohiuddin International Girls College. He also spearheaded humanitarian aid, such as post-2005 earthquake relief, and countered Islamophobia through events like the 2012 London protest. Scholars worldwide, including Pir Mohammad Karam Shah Sahib and Pir Naseeruddin Naseer, praised his contributions to Shariah, Tariqa, and the Ummah."
    ],
    details: [
      "Founder of Mohiuddin Trust and Chairman of Noor TV, promoting education and humanitarian aid.",
      "Received khilafat and became sajjada nasheen of Darbar Nerian Sharif in 1974.",
      "Established educational institutions like Mohiuddin Islamic University and Girls College.",
      "Led global efforts against Islamophobia, including the 2012 London protest.",
      "Praised by scholars for spreading Shariah and Tariqa, awarded Lifetime Achievement in 2012."
    ],
    image: "https://via.placeholder.com/400x200?text=Alauddin+Siddiqui"
  }
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
          Journey Through the Spiritual Lineage of Khwaja Ghulam Mohiuddin Ghaznavi
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