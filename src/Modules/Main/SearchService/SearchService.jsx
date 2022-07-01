import React, { useEffect, useState } from "react";
import { SerchEngine } from "Components/Layout/SearchEngine/SearchEngine";
import { DivShadow } from "Components/StyledComponets/DivShadow";
import { useParams } from "react-router";
import { Title } from "Components/StyledComponets/Titlte";
import { Header } from "Components/Layout/Header/Header";
import { CardServiceSearch } from "Components/Ui/Cards/CardServiceSearch/CardServiceSearch";

import "./SearchService.css";
import { LoadingCard } from "Components/Ui/LoadingCard/LoadingCard";
import { Link, useSearchParams } from "react-router-dom";
import { LoadingCardSearch } from "Components/Ui/LoadingCardSearch/LoadingCardSearch";
import { SelectTextLabel } from "Components/Ui/SelectTextLabel/SelectTextLabel";
import { Button } from "Components/Ui/Button/Button";
import { CardService } from "Components/Ui/Cards/CardService/CardService";

export const SearchService = () => {
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState(null);

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API_PRODUCTION}/searchServices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          serviceName: params.get("n").split("-").join(" "),
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          setResults(user);
          console.log(user);
        })
        .finally(() => setLoading(false));
    };
    get();
  }, [params]);

  const searchWithCategory = async () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_PRODUCTION}/filter/${category}/1/${params.get("n").split("-").join(" ")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // setResults(response);
        console.log(response);
      })
      .finally(() => setLoading(false));
  };

  const formatName = (name) => {
    return name.split(" ").join("-").toLowerCase();
  };

  useEffect(() => {
    const fetchTest = async () => {
      fetch(`${process.env.REACT_APP_API_PRODUCTION}/categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setCategories(
            response.map((item) => {
              return { id: item.categId, name: item.categoryName };
            })
          );
        })
        .catch((error) => console.log(error));
    };

    fetchTest();
  }, []);

  return (
    <>
      <Header />
      <SerchEngine />
      <main>
        <div className="center_main_search">
          <DivShadow className="search_info">
            <header className="header_search_info">
              <Title className="title_value_search">
                {params.get("n").split("-").join(" ")}
              </Title>
              {
                loading ?
                  <p></p>
                  :
                  <p className="length_results">{results.length} Busquedas</p>
              }

            </header>
            <div className="filter_search_info">
              <p className="subtitle_filter_search">Filtros de busqueda</p>

              <SelectTextLabel
                titleLabel="Seleccione una categoria"
                nameSelect="Categoria"
                options={categories}
                onChange={(e) => setCategory(e.target.value)}
              />

              <SelectTextLabel
                titleLabel="Seleccione un tipo de servicio"
                nameSelect="Categoria"
                options={[{ id: 'Oferta', name: 'Oferta' }, { id: 'Demanda', name: 'Demanda' }]}
                onChange={(e) => setCategory(e.target.value)}
              />

              <Button
                value="Guardar filtro"
                onClick={() => searchWithCategory()}
              />
            </div>
          </DivShadow>

          <DivShadow className="search_services">
            {loading ? (
              <>
                <LoadingCardSearch />
                <LoadingCardSearch />
              </>
            ) : (
              <>
                <div className="section_hight_resolution">
                  {
                    results.map((item, index) => (
                      <Link
                        key={index}
                        to={`/CO/service/${formatName(item.name)}?sid=${item.id}`}
                        className="link_card_service"
                      >
                        <CardServiceSearch info_service={item} />
                      </Link>
                    ))
                  }
                </div>

                <div className="section_slow_resolution">
                  {
                    results.map((item, index) => (
                      <Link
                        key={index}
                        to={`/CO/service/${formatName(item.name)}?sid=${item.id}`}
                        className="link_card_service"
                      >
                        <CardService info={item} />
                      </Link>
                    ))
                  }
                </div>

              </>
            )
            }
          </DivShadow>
        </div>
      </main>
    </>
  );
};
