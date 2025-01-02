import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  anh: {
    marginTop: 25,
    width: 280,
    height: 300,
  },
  mana: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8353E2',
  },
  inputText: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 80,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  center: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#00BDD6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: 250,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // man hinh 2
  anh1: {
    width: 80,
    height: 80,
    borderRadius: 100,
    border: 1,
  },

  container :{
    flex:1,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 45,
  },

  top1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
  },

  inputText1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    width: 370,
    height: 40,
    marginLeft: 20,
  },

  menu: {
    backgroundColor: 'lightgrey',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    width: 350,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  buttonText1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuCenter: {
    flex:3,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  add: {
    backgroundColor: '#00BDD6',
    width: 55,
    height: 55,
    marginTop: 2,
    borderRadius: 100,
  },

  textAdd: {
    fontSize: 38,
    color: 'white',
    textAlign:'center',
  },

  nutMH2:{
    width:350,
    height:50,
    marginTop:10,
  },

  hienThiMH2:{
    backgroundColor:'#e0e0e0', 
    flexDirection:'row',
    justifyContent:'space-between',       
    marginBottom:10, 
    alignItems:'center', 
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:10,
    height:55,
    width:'100%'
  },

  //Màn hình 3
  topMH3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 45,
  },

  top2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft:15,
  },

  centerMH3: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  addJob: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  buttonFinish: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },

  buttonTextFinish:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  header1:{
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop: 40,
  },

  anhMH3:{
    marginTop: 35,
    width: 230,
    height: 250,
  }
});

export default styles;
