"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCatalogProps {
    onProductSelect: (productName: string) => void;
    selectedProduct?: string;
}

// Define product categories and items for L'Oréal
const PRODUCT_CATEGORIES = {
    skincare: {
        title: "Skincare",
        products: [
            { name: "Hydra Genius Daily Liquid Care", price: "$14.99", category: "moisturizer" },
            { name: "Revitalift Anti-Wrinkle Cream", price: "$24.99", category: "anti-aging" },
            { name: "Pure Clay Detox Mask", price: "$8.99", category: "mask" },
            { name: "Micellar Water", price: "$6.99", category: "cleanser" },
        ]
    },
    makeup: {
        title: "Makeup", 
        products: [
            { name: "True Match Foundation", price: "$12.99", category: "foundation" },
            { name: "Voluminous Mascara", price: "$9.99", category: "mascara" },
            { name: "Color Riche Lipstick", price: "$8.99", category: "lipstick" },
            { name: "Infallible Pro-Matte Foundation", price: "$14.99", category: "foundation" },
        ]
    },
    haircare: {
        title: "Hair Care",
        products: [
            { name: "Elvive Total Repair 5 Shampoo", price: "$5.99", category: "shampoo" },
            { name: "Ever Pure Sulfate-Free Shampoo", price: "$7.99", category: "shampoo" },
            { name: "Elvive Volume Filler Conditioner", price: "$5.99", category: "conditioner" },
            { name: "Ever Curl Leave-in Cream", price: "$9.99", category: "styling" },
        ]
    }
};

const POPULAR_PRODUCTS = new Set([
    'True Match Foundation', 'Voluminous Mascara', 'Hydra Genius Daily Liquid Care', 
    'Elvive Total Repair 5 Shampoo', 'Pure Clay Detox Mask'
]);

export function ProductCatalog({ onProductSelect, selectedProduct }: ProductCatalogProps) {
    const getProductStatus = (productName: string) => {
        if (selectedProduct === productName) return 'selected';
        if (POPULAR_PRODUCTS.has(productName)) return 'popular';
        return 'available';
    };

    const getProductColor = (status: string) => {
        switch (status) {
            case 'selected':
                return 'bg-pink-600 text-white cursor-pointer hover:bg-pink-700 border-pink-600';
            case 'popular':
                return 'bg-yellow-50 hover:bg-yellow-100 cursor-pointer border-yellow-300 text-yellow-800';
            case 'available':
                return 'bg-white hover:bg-gray-50 cursor-pointer border-gray-200 text-gray-700';
            default:
                return 'bg-white border-gray-200';
        }
    };

    const renderProductSection = (categoryKey: string, config: typeof PRODUCT_CATEGORIES.skincare) => (
        <div key={categoryKey} className="mb-6">
            <h4 className="text-sm font-semibold mb-3 text-center text-pink-800">{config.title}</h4>
            <div className="grid grid-cols-1 gap-2">
                {config.products.map(product => {
                    const status = getProductStatus(product.name);
                    return (
                        <button
                            key={product.name}
                            className={`p-3 text-left text-xs border rounded-lg ${getProductColor(status)} transition-all duration-200 hover:shadow-md`}
                            onClick={() => onProductSelect(product.name)}
                            title={`${product.name} - ${product.price}${status === 'popular' ? ' (Popular!)' : ''}`}
                        >
                            <div className="font-medium mb-1">{product.name}</div>
                            <div className="text-xs opacity-75 flex justify-between items-center">
                                <span className="capitalize">{product.category}</span>
                                <span className="font-semibold">{product.price}</span>
                            </div>
                            {status === 'popular' && (
                                <div className="text-xs text-yellow-600 font-medium mt-1">⭐ Popular Choice</div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <Card className="w-full max-w-md mx-auto my-4 bg-gradient-to-br from-pink-50 to-purple-50">
            <CardContent className="p-4">
                <div className="text-center mb-4">
                    <h3 className="font-semibold text-lg mb-2 text-pink-800">L'Oréal Product Catalog</h3>
                    <p className="text-xs text-gray-600 mb-3">Discover our bestselling beauty products</p>
                    <div className="flex justify-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-white border border-gray-200 rounded"></div>
                            <span>Available</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-yellow-50 border border-yellow-300 rounded"></div>
                            <span>Popular</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-pink-600 rounded"></div>
                            <span>Selected</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {Object.entries(PRODUCT_CATEGORIES).map(([key, config]) => 
                        renderProductSection(key, config)
                    )}
                </div>

                {selectedProduct && (
                    <div className="mt-4 p-3 bg-pink-50 rounded-lg text-center border border-pink-200">
                        <p className="text-sm font-medium text-pink-800">
                            Selected: {selectedProduct}
                        </p>
                        <p className="text-xs text-pink-600 mt-1">
                            Great choice! Our beauty consultant will help you with this product.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
} 