"use client";

import { Route_Path } from "@/apis/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const RedirectionPage = () => {
  const PathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const name = searchParams.get("name");

    try {
      if (
        PathName === Route_Path.PRODUCTS_DETAILS ||
        (PathName === Route_Path.PRODUCTS && name)
      ) {
        const NewPath = Route_Path.PRODUCTS + "/" + name;
        router.push(NewPath);
      }

      if (
        PathName === Route_Path.PRODUCT_FAMILY_DETAILS ||
        (PathName === Route_Path.PRODUCT_FAMILY && name)
      ) {
        const NewPath = Route_Path.PRODUCT_FAMILY + "/" + name;
        router.push(NewPath);
      }
    } catch (ex) {
      console.log(ex);
    }
  }, [PathName, searchParams, router]);

  return null;
};

export default RedirectionPage;