"use client";
import React, { useEffect, useState } from "react";
import PropertyPagination from "./PropertyPagination";
import PropertyFilter from "./PropertyFilter";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const MainPropertyArea = ({ propertiesData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchFromUrl = useSearchParams();
  const searchType = searchFromUrl.get("type");
  const searchBed = searchFromUrl.get("bed");
  const searchLoaction = searchFromUrl.get("location");

  const [mainProperty, setMainProperty] = useState([...propertiesData]);
  const [type, setType] = useState(false);
  const [bed, setBed] = useState(false);
  const [price, setPrice] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedBed, setSelectedBed] = useState(null);
  const [search, setSearch] = useState("");
  const [originalData] = useState([...propertiesData]);

  const handleType = (value) => {
    router.push(pathname + "?type=" + value);
    setSelectedBed(null);
    setSearch("");
    setSelectedType(value);
    setType(!type);
  };

  const handleBed = (value) => {
    router.push(pathname + "?bed=" + value);
    setSelectedBed(value);
    setBed(!bed);
    setSelectedType(null);
    setSearch("");
  };

  const handleSearch = (e) => {
    router.push(pathname + "?location=" + e.target.value);
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    setSelectedType(null);
    setSelectedBed(null);
  };

  const handleReset = () => {
    router.push(pathname);
    setSelectedType(null);
    setSelectedBed(null);
    setSearch("");
    setMainProperty(originalData);
  };

  useEffect(() => {
    if (!type || !bed || !search) {
      setMainProperty(originalData);
    }

    if (searchType) {
      const filteredData = originalData.filter(
        (property) => property.type === searchType
      );
      setMainProperty(filteredData);
      setSelectedType(searchType);
    }

    if (searchBed) {
      const bed = +searchBed.split("-")[1];
      const filteredData = originalData.filter(
        (property) => property.bed === bed
      );
      setMainProperty(filteredData);
      setSelectedBed(searchBed);
    }

    if (searchLoaction) {
      const filteredData = originalData.filter((property) =>
        property.location.toLowerCase().includes(searchLoaction.toLowerCase())
      );
      setMainProperty(filteredData);
      setSearch(searchLoaction);
    }
  }, [type, bed, originalData, searchType, searchBed, searchLoaction, search]);

  const propertyFilterFunctionality = {
    propertiesData,
    type,
    setType,
    selectedType,
    price,
    setPrice,
    bed,
    selectedBed,
    search,
    handleSearch,
    handleReset,
    handleBed,
    setBed,
    handleType,
  };

  return (
    <section className="filter">
      <PropertyFilter
        propertyFilterFunctionality={propertyFilterFunctionality}
      />
      <div className="container">
        <div className="listing">
          <PropertyPagination
            limit={6}
            showPagination
            property={mainProperty}
          />
        </div>
      </div>
    </section>
  );
};

export default MainPropertyArea;
