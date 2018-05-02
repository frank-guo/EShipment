using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace EShipment.Data.Migrations
{
    public partial class AlterOrderIdInStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderStatus_Orders_orderID",
                table: "OrderStatus");

            migrationBuilder.DropIndex(
                name: "IX_OrderStatus_orderID",
                table: "OrderStatus");

            migrationBuilder.DropColumn(
                name: "orderID",
                table: "OrderStatus");

            migrationBuilder.CreateIndex(
                name: "IX_OrderStatus_Order_Id",
                table: "OrderStatus",
                column: "Order_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderStatus_Orders_Order_Id",
                table: "OrderStatus",
                column: "Order_Id",
                principalTable: "Orders",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderStatus_Orders_Order_Id",
                table: "OrderStatus");

            migrationBuilder.DropIndex(
                name: "IX_OrderStatus_Order_Id",
                table: "OrderStatus");

            migrationBuilder.AddColumn<long>(
                name: "orderID",
                table: "OrderStatus",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderStatus_orderID",
                table: "OrderStatus",
                column: "orderID");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderStatus_Orders_orderID",
                table: "OrderStatus",
                column: "orderID",
                principalTable: "Orders",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
