import { FileUploader, 
  ThemeProvider, 
  useTheme,  
  Divider, 
  TextAreaField, 
  SwitchField } from "@aws-amplify/ui-react";
import { API, Storage } from "aws-amplify";
import DatePk  from "./DatePk"
import { useState } from "react";
import "./home.css"
import { createQuest } from "../graphql/mutations";

const theme = {
    name: 'my-theme',
    tokens: {
      colors: {},
      borderWidths: {
        small: { value: '2px' },
        medium: { value: '4px' },
        large: { value: '8px' },
      },
      radii: {
        xs: { value: '1rem' },
        small: { value: '2rem' },
        medium: { value: '2rem' },
        large: { value: '2rem' },
        xl: { value: '3rem' },
      },
    },
  };
  
export const Home = () => {
const [img, setImg] = useState(null)
const [aud, setAud] = useState(false)
const {tokens}= useTheme()
const initlialize={
  lang:"Fr", textOrg:"", shedOn:"", audioUrlOrg:"" }
const [quest, setQuest] = useState(initlialize)
const  lab=()=> {
  if (aud) return "Audio 🔊"
  else return "Audio 🔇"
}
const handleChange=(key)=>{
  return (e)=> {
    setQuest(
      {...quest, [key]:e.target.value}
    )
  }
}

const storeQuestion= async (keys)=>{
console.log(keys);
        setQuest({...quest, img:keys})
        await Storage.put(keys, {level:"public"})
        await API.graphql(
          {query: createQuest, 
          variables: {
            input: {
              quest
            }
          }
        }
        )
    }

    const onSuccess= async ({keys})=>{
    
        storeQuestion(keys);
        // const image =
        //     await Storage.get(keys, {
        //         level: "public",
               
        //         download: true,
        //         cacheControl: "no-cache",
        //     })
        // setImg( URL.createObjectURL(image["Body"]))

    }
  return (
    <>
    <div className="box">
      <div>

        <DatePk />
      </div> 
        <div>
  <SwitchField 
isDisabled={false}
defaultChecked={aud} 
label={ lab()}
labelPosition="top"
thumbColor={tokens.colors.blue[10]}
onChange={() => { 
  setAud(!aud)
  
}}
/>
        </div>

    </div>


<TextAreaField
            label="Question :"
            descriptiveText=" Type the Question here :"
            size="large"
            placeholder="Question ...."
            variation="quite"
            isRequired={true}
            value={quest.textOrg}
            onChange={handleChange("textOrg")}

/>    
<Divider
        orientation="horizontal" />
    <ThemeProvider theme={theme}>
    <FileUploader
    hasMultipleFiles={false}
    isResumable={true}
    maxFileCount={1}
    accessLevel="public"
    acceptedFileTypes={['.gif', '.bmp', '.jpeg', '.jpg']}
    variation="button" 
    onSuccess={onSuccess}
    isPreviewerVisible={true}/>
    </ThemeProvider>  
    
    </>
  )
}
