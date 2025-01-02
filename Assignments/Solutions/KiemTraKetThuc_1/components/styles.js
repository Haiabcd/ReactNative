import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  center: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width: 380,
    height: 400,
    backgroundColor: '#E941411A',
    borderRadius: 15,
  },

  image: {
    width: 330,
    height: 310,
    marginBottom: 20,
  },
  shopTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  getStated:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40,
      width:380,
      height:50,
      backgroundColor:'red',
      borderRadius:50,
  },

  //MH 01
  titleMH01:{
    marginTop:40,
    marginLeft:35,
  },

  action:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:30,
  },

  button:{
    borderColor:'red',
    borderWidth:1,
    width:120,
    height:40,
    borderRadius:5,
  },

  doiMau :{
   backgroundColor :'red',
  },

  danhSachSP:{
    flex:1,
    padding: 10,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
    marginTop:5,
    marginBottom: 30,
  },

  productImage: {
    width: 138,
    height: 138,
    marginBottom: 10,
  },

  nameSP:{
    fontSize:16,
    fontWeight:'bold',
  },

  priceSP:{
    fontSize:17,
    fontWeight:'medium',

  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  filterContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'pink',
    width :100,
  },
  activeFilterButton: {
    color: 'red',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#bbbbbb',
    textAlign :'center',
    fontWeight :'bold'
  },
  bikeCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#E941411A',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  bikeImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bikePrice: {
    fontSize: 14,
    color: 'black',
  },
  
  //MH 02

  topMH02:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#E941411A',
      marginLeft:10,
      marginTop:45,
      marginRight:10,
  },

  anhMH02:{
    width: 330,
    height:330,
  },

  buttonAdd:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40,
      width:380,
      height:50,
      backgroundColor:'red',
      borderRadius:18,
  },

  information:{
    marginTop:25,
  },

  sale:{
    flexDirection:'row',
  }
});

export default styles;