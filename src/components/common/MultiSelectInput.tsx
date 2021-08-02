import Tags from '@yaireo/tagify/dist/react.tagify'
import { useRef } from "react"

/**
 * planning on using tagify
 * @param props 
 * @returns the JSX for a multi-select input 
 */

export default function MultiSelect(props: {
  cardInput: {
    ref: string,
    label: string,
  },
  value: string,
  onChange: (value: string, inputRef: string) => void,
  whitelist?: string[];
  mode?: 'mix' | 'select';
}) {

  const baseTagifySettings = {
    blacklist: ["xxx", "yyy", "zzz"],
    maxTags: 6,
    placeholder: "Add tag",
    dropdown: {
      enabled: 0 
    },
    mode: props.mode || null,
    whitelist: props.whitelist || [],
  }

  const tagifyRef = useRef();

  const handleChange = (e: any) => {
    // value is a stringified json array
    const value = e.detail.value;
    props.onChange(value, props.cardInput.ref)
  }

  return(
    // wrapping the tags element in an label makes the browser focus on the original input not the tagify one
    <div>
      {props.cardInput.label}
      <Tags 
        tagifyRef={tagifyRef}
        settings={baseTagifySettings}
        value={props.value}
        onChange={(e) => handleChange(e)}
        />
    </div>
  )
}