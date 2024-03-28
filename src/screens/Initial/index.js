import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';
import React from 'react'

export default function Initial() {
  const navigation = useNavigation;

  return (
<ScrollView  
	style = {{
		backgroundColor: "#FFFFFF",
		paddingTop: 35,
		paddingBottom: 109,
	}}>
	<Text 
		style = {{
			color: "#000000",
			fontSize: 30,
			marginBottom: 5,
			marginHorizontal: 52,
		}}>
		{"Cursos disponíveis"}
	</Text>
	<View 
		style = {{
			height: 1,
			backgroundColor: "#000000",
			marginBottom: 22,
			marginHorizontal: 21,
		}}>
	</View>
	<View 
		style = {{
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginBottom: 14,
			marginHorizontal: 29,
		}}>
		<View 
			style = {{
				width: 141,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				paddingVertical: 20,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
			<Image
				source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
				resizeMode = {"stretch"}
				style = {{
					height: 63,
					marginBottom: 21,
					marginHorizontal: 39,
				}}
			/>
			<Text 
				style = {{
					color: "#000000",
					fontSize: 20,
					marginHorizontal: 16,
				}}>
				{"Matemática"}
			</Text>
		</View>
		<View 
			style = {{
				width: 141,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				paddingVertical: 20,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
			<Image
				source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
				resizeMode = {"stretch"}
				style = {{
					height: 63,
					marginBottom: 22,
					marginHorizontal: 39,
				}}
			/>
			<Text 
				style = {{
					color: "#000000",
					fontSize: 20,
					marginHorizontal: 25,
				}}>
				{"Português"}
			</Text>
		</View>
	</View>
	<View 
		style = {{
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginBottom: 17,
			marginHorizontal: 29,
		}}>
		<View 
			style = {{
				width: 141,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				paddingVertical: 28,
				paddingHorizontal: 34,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
			<Image
				source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
				resizeMode = {"stretch"}
				style = {{
					height: 57,
					marginBottom: 16,
				}}
			/>
			<Text 
				style = {{
					color: "#000000",
					fontSize: 20,
				}}>
				{"Química"}
			</Text>
		</View>
		<View 
			style = {{
				width: 141,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				paddingVertical: 27,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
			<Image
				source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
				resizeMode = {"stretch"}
				style = {{
					height: 57,
					marginBottom: 16,
					marginHorizontal: 42,
				}}
			/>
			<Text 
				style = {{
					color: "#000000",
					fontSize: 20,
					marginHorizontal: 10,
				}}>
				{"Programação"}
			</Text>
		</View>
	</View>
	<View 
		style = {{
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginBottom: 17,
			marginHorizontal: 29,
		}}>
		<View 
			style = {{
				width: 141,
				height: 142,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
		</View>
		<View 
			style = {{
				width: 141,
				height: 142,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
		</View>
	</View>
	<View 
		style = {{
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginHorizontal: 29,
		}}>
		<View 
			style = {{
				width: 141,
				height: 142,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
		</View>
		<View 
			style = {{
				width: 141,
				height: 142,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
		</View>
	</View>
	<View 
		style = {{
			flexDirection: "row",
			justifyContent: "space-between",
			marginHorizontal: 28,
		}}>
		<View 
			style = {{
				width: 141,
				height: 142,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				marginTop: 19,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
		</View>
		<View 
			style = {{
				width: 141,
				height: 142,
				backgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderRadius: 20,
				borderWidth: 2,
				marginTop: 20,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
		</View>
		<View 
			style = {{
				position: "absolute",
				top: 0,
				right: 0,
				width: 304,
				height: 60,
				backgroundColor: "#D9D9D9",
				borderRadius: 50,
				paddingHorizontal: 44,
				shadowColor: "#00000040",
				shadowOpacity: 0.3,
				shadowOffset: {
				    width: 0,
				    height: 4
				},
				shadowRadius: 4,
				elevation: 4,
			}}>
			<View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					marginTop: 17,
				}}>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						width: 32,
						height: 32,
					}}
				/>
				<View 
					style = {{
						flex: 1,
						alignSelf: "stretch",
					}}>
				</View>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						width: 32,
						height: 32,
						marginRight: 60,
					}}
				/>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						width: 32,
						height: 32,
					}}
				/>
			</View>
		</View>
	</View>
</ScrollView>
  )
}