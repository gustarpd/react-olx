import { useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header";
import { createNumberMask } from "text-mask-addons";
import { api } from "../../services/api";
import { FormAddNewAd } from "./style";
import { useNavigate } from "react-router-dom";

type categoriesType = {
  name: string;
  _id: string;
};
export const AddAd = () => {
  const fileField: any = useRef();
  const token: any = localStorage.getItem("token");
  const goLogin = useNavigate();
  const [title, setTitle] = useState("");
  const [categoriesSelect, setCatSelect] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const getCats = async () => {
      const req = await api.get("/categories");
      const res = await req.data;

      setCategories(res.categories);
      console.log(res);
    };
    getCats();
  }, []);

  const handleSubmitButton = async () => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("cat", categoriesSelect);
    formData.append("desc", description);
    formData.append('token', token)

    for (let i = 0; i < fileField.current.files.length; i++) {
      formData.append("img", fileField.current.files[i]);
    }

    const json = await api.post('/ad/add', formData);
    const res = await json.data 
    if(res.id) {
      goLogin(`/post-ad/${res.id}`)
    }
    console.log(json);
  };

  const priceMask = createNumberMask({
    prefix: "R$",
    includesThousandSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
  });

  return (
    <>
      <Header />
      <FormAddNewAd>
        <h1>Postar um anúncio</h1>
        <form>
          <label>Titulo</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Preço</label>
          <input type="number" onChange={e => setPrice(e.target.value)} />
          <label>Categoria</label>
          <select onChange={(e) => setCatSelect(e.target.value)}>
            <option>Selecione</option>
            {categories.map((item: any, key) => {
              return (
                <option key={key} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <label>Descrição</label>
          <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
          <label>Imagens (1 ou mais)</label>
          <input type="file" ref={fileField} />
        </form>
        <div><button onClick={handleSubmitButton}>Adicionar anúncio</button></div>
      </FormAddNewAd>
    </>
  );
};
