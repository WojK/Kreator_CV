﻿// <auto-generated />
using System;
using CvApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CvApi.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("CvApi.Models.Education", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("SchoolCity")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SchoolDesc")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SchoolFaculty")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SchoolFinishYear")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SchoolName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SchoolSpecialization")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SchoolStartYear")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SchoolSubject")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserCvDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserCvDataId");

                    b.ToTable("Education");
                });

            modelBuilder.Entity("CvApi.Models.Experience", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("CompanyCity")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ExperienceDesc")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ExperienceFrom")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ExperienceTo")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("JobDescription")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserCvDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserCvDataId");

                    b.ToTable("Experience");
                });

            modelBuilder.Entity("CvApi.Models.HobbyItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Hobby")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserCvDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserCvDataId");

                    b.ToTable("HobbyItem");
                });

            modelBuilder.Entity("CvApi.Models.LanguageItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Language")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserCvDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserCvDataId");

                    b.ToTable("LanguageItem");
                });

            modelBuilder.Entity("CvApi.Models.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ProjectDescription")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ProjectLink")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ProjectName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserCvDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserCvDataId");

                    b.ToTable("Project");
                });

            modelBuilder.Entity("CvApi.Models.SkillItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Skill")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserCvDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserCvDataId");

                    b.ToTable("SkillItem");
                });

            modelBuilder.Entity("CvApi.Models.SoftSkillItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("SoftSkill")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserCvDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserCvDataId");

                    b.ToTable("SoftSkillItem");
                });

            modelBuilder.Entity("CvApi.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("UserCvDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CvApi.Models.UserCvData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Aboutme")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Color")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Github")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("IsEmail")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsGithub")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsLinkedin")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsLocation")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsPhoneNumber")
                        .HasColumnType("boolean");

                    b.Property<string>("Linkedin")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ProfileDescription")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Tech")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("UserCvData");
                });

            modelBuilder.Entity("CvApi.Models.Education", b =>
                {
                    b.HasOne("CvApi.Models.UserCvData", null)
                        .WithMany("EducationList")
                        .HasForeignKey("UserCvDataId");
                });

            modelBuilder.Entity("CvApi.Models.Experience", b =>
                {
                    b.HasOne("CvApi.Models.UserCvData", null)
                        .WithMany("ExperienceList")
                        .HasForeignKey("UserCvDataId");
                });

            modelBuilder.Entity("CvApi.Models.HobbyItem", b =>
                {
                    b.HasOne("CvApi.Models.UserCvData", null)
                        .WithMany("HobbyList")
                        .HasForeignKey("UserCvDataId");
                });

            modelBuilder.Entity("CvApi.Models.LanguageItem", b =>
                {
                    b.HasOne("CvApi.Models.UserCvData", null)
                        .WithMany("LanguageList")
                        .HasForeignKey("UserCvDataId");
                });

            modelBuilder.Entity("CvApi.Models.Project", b =>
                {
                    b.HasOne("CvApi.Models.UserCvData", null)
                        .WithMany("ProjectList")
                        .HasForeignKey("UserCvDataId");
                });

            modelBuilder.Entity("CvApi.Models.SkillItem", b =>
                {
                    b.HasOne("CvApi.Models.UserCvData", null)
                        .WithMany("SkillList")
                        .HasForeignKey("UserCvDataId");
                });

            modelBuilder.Entity("CvApi.Models.SoftSkillItem", b =>
                {
                    b.HasOne("CvApi.Models.UserCvData", null)
                        .WithMany("SoftSkillList")
                        .HasForeignKey("UserCvDataId");
                });

            modelBuilder.Entity("CvApi.Models.UserCvData", b =>
                {
                    b.HasOne("CvApi.Models.User", "User")
                        .WithOne("UserCvData")
                        .HasForeignKey("CvApi.Models.UserCvData", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("CvApi.Models.User", b =>
                {
                    b.Navigation("UserCvData")
                        .IsRequired();
                });

            modelBuilder.Entity("CvApi.Models.UserCvData", b =>
                {
                    b.Navigation("EducationList");

                    b.Navigation("ExperienceList");

                    b.Navigation("HobbyList");

                    b.Navigation("LanguageList");

                    b.Navigation("ProjectList");

                    b.Navigation("SkillList");

                    b.Navigation("SoftSkillList");
                });
#pragma warning restore 612, 618
        }
    }
}
