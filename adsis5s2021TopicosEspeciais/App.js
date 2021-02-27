import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   View,
   Text,
   Image,
   touchabkeOpacity,
   Touchable
}  from 'react-native'

import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugIntructions,
   ReloadIntructions,
}  from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
   return (
      <SafeAreaView>
         
         <View style = { styles.linhaNomeImage }>  
         
            <View style={ { flexDirection:'row', alignItems: 'center' } }>
            <Touchable>
               <View>
                  <Image 
                     style={{ width: 55, height: 55, borderRadius: 50 }}
                     source={{
                        uri: 'https://pm1.narvii.com/6511/9e96c86fc6cd2d4090b2a85bc4702cb94d319875_hq.jpg'
                     }}  
                  
                     />
               </View>
            </Touchable>
            
            <text style = { styles.nomeUsuario }>Caio Francisco Santos Vega</text>
            
            </View>
            
            <Touchable>
               <View>
                  <text style = { { FontSize: 30, color: '#c4c4c4' } }>...</text>
               </View>
            </Touchable>

         </View>   

   {/* View da Foto */}
         <View>
            <image
               style={ styles.fotoPost }
               source={ {
                  uri: 'https://www.planocritico.com/wp-content/uploads/2014/11/37-Soundtrack-Guardians-Of-The-Galaxy-Awesome-Mix-Vol-1.jpg'
               } }
            />
         </View>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create( { 
   fotoPost: {
      width: '100%',
      height: 350 
   },
   linhaNomeImage:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      alignItems: 'center', 
      marginBottom: 10
   },
   nomeUsuario:{ 
      fontSize: 18,
      color: '#000',
      marginLeft: 10,
      fontWeight: 'bold'
   }
} );

export default App;

