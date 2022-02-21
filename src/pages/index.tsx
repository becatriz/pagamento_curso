import { Card } from "../components/Card";
import { GetStaticProps } from "next";
import { api } from "../services/api/api";

import styles from "../styles/Home.module.scss";

interface ProductPriceProps {
  id: string;
  active: boolean;
  product: string;
  unit_amount: number;
  images: string;
}

interface ProductProps {
  id_price: string;
  product_id: string;
  amount: number;
}

interface ProductFormattedProps {
  id: string;
  price_id: string;
  price: number;
  name: string;
  image: string;
  currency: string;
}

interface Products {
  products: ProductFormattedProps[];
}


export default function Home({ products }: Products) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {products.map((value) => (
          <Card
            key={value.id}
            name={value.name}
            image={value.image}
            productId={value.price_id}
            price={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value.price / 100)}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const productsPrices = await getProductsPrices();
  const products = await getProductsFormatted(productsPrices);

  async function getProductsPrices() {
    const { data } = await api.get(`prices`);

    return data.data.reduce(
      (acc: ProductPriceProps[], item: ProductPriceProps) => {
        if (item.active) {
          return [
            ...acc,
            {
              id_price: item.id,
              amount: item.unit_amount,
              product_id: item.product,
            },
          ];
        }

        return acc;
      },
      []
    );
  }

  async function getProductsFormatted(productsPrices: ProductProps[]) {
    return await productsPrices.reduce(
      async (promisedAcc: any, item: ProductProps) => {
        const { data } = await api.get(`products/${item.product_id}`);
        const acc = await promisedAcc;

        return [
          {
            id: item.product_id,
            currency: "BRL",
            price_id: item.id_price,
            name: data.name,
            price: item.amount,
            image: data.images[0],
          },
          ...acc,
        ];
      },
      []
    );
  }

  return {
    props: {
      products,
    },
  };
};
