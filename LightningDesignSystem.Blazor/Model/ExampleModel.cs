﻿using System.ComponentModel.DataAnnotations;

namespace LightningDesignSystem.Blazor.Model
{
    public class ExampleModel
    {
        [Required]
        [StringLength(10, ErrorMessage = "Name is too long.")]
        public string Name { get; set; }
    }
}
