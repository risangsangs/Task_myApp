import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      title: "Project Abstrak",
      description: "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
      img: require("../../assets/images/project1.png")
    },
    {
      id: 2,
      title: "Project Abstrak",
      description: "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
      img: require("../../assets/images/project2.png")
    },
    {
      id: 3,
      title: "Project Abstrak",
      description: "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
      img: require("../../assets/images/project3.png")
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>

        {/* header */}
        <View>
          <Image source={require('../../assets/images/Logo.png')} />
          <Text style={styles.headerTitle}>CREATIVE DEVELOPER</Text>
          <Image source={require('../../assets/images/HeaderImg1.png')} style={styles.headerProfile} />
          <View style={styles.headerAboutGroup}>
            <Text style={styles.headerAboutPurpose}>I SUPPORT DESIGNER AND AGENCIES WITH CREATIVE DEVELOPMENT</Text>
            <Text style={styles.headerAboutName}>RISANG AGNIJATI</Text>
          </View>
          <View style={styles.scrollNotif}>
            <View style={styles.scrollNotifImg}>
              <Feather name="arrow-down" size={40} color="black" />
            </View>
            <Text style={styles.scrollNotifText}>SCROLL FOR FUTURE PROJECTS TOGETHER</Text>
          </View>
        </View>

        {/* portfolio */}
        <View>
          <Text style={styles.projectTitleContainer}>My Recent Project</Text>
          {data.map((item) => {
            return (
              <View>
                <View style={styles.projectContainer}>
                  <Image style={styles.projectImage} source={item.img} />
                  <View style={styles.descContainer}>
                    <View>
                      <Text style={styles.titleProject}>{item.id}/{item.title}</Text>
                      <Text style={styles.descProject}>{item.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.projectBtn}>
                      <Text style={styles.projectBtnText}>More shots from this project</Text>
                      <Feather name='arrow-up-right' size={15} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          })}
        </View>

        {/* footer */}
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footer}>
              <Text style={styles.footerText}>Telegram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer}>
              <Text style={styles.footerText}>Dribbble</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer}>
              <Text style={styles.footerText}>Github</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen;