const TextInput = ({label, placeholder})=> {
    return <div className="TextInputDiv flex flex-col space-y-2 w-full">
                <label for={label} className="font-semibold">{label}</label>
                <input type="text" placeholder={placeholder} className="p-2 border border-gray-400 broder-solid rounded" id={label} />
            </div>
};

export default TextInput;