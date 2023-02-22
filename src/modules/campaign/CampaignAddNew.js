import "react-quill/dist/quill.snow.css";
import { Dropdown } from "components/dropdown";
import { imgbbAPI } from "constants/global";
import { Input, Textarea } from "components/input";
import { Label } from "components/lable";
import { toast } from "react-toastify";
import { URLData } from "components/config/config";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "components/button/Button";
import DateTimePicker from "react-datetime-picker";
import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import ImageUpload from "components/image/ImageUpload";
import ImageUploader from "quill-image-uploader";
import React, { useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import useOnChange from "hooks/useOnChange";
Quill.register("modules/imageUploader", ImageUploader);
const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, watch, reset } = useForm();
  const resetValues = () => {
    setStartDate("");
    setEndDate("");
    reset({});
  };
  const handleAddNewCampaign = async (values) => {
    try {
      axios.post(`${URLData}/campaigns`, {
        ...values,
        startDate,
        endDate,
        content,
      });
      toast.success("Create Campaign Successfully");
      resetValues();
    } catch (err) {
      console.log(err);
    }
  };
  const getValuesDropDown = (name, defaultValues = "") => {
    const value = watch(name) || defaultValues;
    return value;
  };
  const [content, setContent] = useState("");
  // country
  const [countries, setCountries] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // data category fake
  const categoriesData = ["education", "architecture"];

  const [filterContry, setFilterCountry] = useOnChange(500);
  useEffect(() => {
    async function fetchCountry() {
      if (!filterContry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterContry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountry();
  }, [filterContry]);

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  //function handleSelectDropdownOption
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <h1 className="py-4 px-14 bg-text4 bg-opacity-5 rounded-xl font-bold text-[24px] flex items-center gap-x-5 text-text3 mb-10">
            Start a Campaign
            <img srcSet="/startup.png 2x" alt="" className="w-6 h-6"></img>
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getValuesDropDown("category", "Select Category")}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={category}
                    onClick={() =>
                      handleSelectDropdownOption("category", category)
                    }
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            control={control}
            placeholder="Write a short description...."
            name="shortdescription"
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story...."
            theme="snow"
            value={content}
            onChange={setContent}
            className="entry-content text-center"
            modules={modules}
          />
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Featured Image *</Label>
            <ImageUpload
              onChange={setValue}
              name="featured_images"
            ></ImageUpload>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised Amount *</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled "
            ></Input>
            <p className="text-text3 text-sm text-left">
              It will help fill amount box by click place each amount by comma ,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-text3 text-sm text-left">
              Place Youtobe or Vimeo Video URl
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method *</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture </Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Counrty *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getValuesDropDown("country", "Select Country")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search Country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            {/* <Input control={control} name="start_date" placeholder="Start Date"> */}
            <DateTimePicker onChange={setStartDate} value={startDate} />
            {/* </Input> */}
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DateTimePicker onChange={setEndDate} value={endDate} />

            {/* <Input
              control={control}
              name="end_date"
              placeholder="End Date"
            ></Input> */}
          </FormGroup>
        </FormRow>
        <div className="text-center mt-10">
          <Button type="submit" kind="primary" className="px-10 mx-auto">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
